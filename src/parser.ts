import { SEPARATOR_OPTION, SEPARATOR_RULE } from "./constants";
import type { RuleOption } from "./rules";

export interface ParsedRule {
  name: string;
  options: RuleOption[];
  error: string;
  key: string;
}

function isIdentifierStart(value: string) {
  return /[A-Za-z]/.test(value);
}

function readRuleCandidate(value: string) {
  if (!isIdentifierStart(value[0] ?? "")) return "";

  let index = 1;
  while (/[A-Za-z0-9]/.test(value[index] ?? "")) index += 1;

  return value[index] === SEPARATOR_OPTION ? value.slice(0, index) : "";
}

function shouldSplitRule(value: string, index: number, knownRuleNames: Set<string>) {
  const candidate = readRuleCandidate(value.slice(index + 1));
  if (!candidate) return false;

  return knownRuleNames.has(candidate) || /^[A-Za-z][A-Za-z0-9]*$/.test(candidate);
}

function splitRules(value: string, knownRuleNames: Set<string>) {
  const segments: string[] = [];
  let current = "";

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];
    const nextCharacter = value[index + 1];

    if (character === "\\" && nextCharacter === SEPARATOR_RULE) {
      current += SEPARATOR_RULE;
      index += 1;
      continue;
    }

    if (character === SEPARATOR_RULE && shouldSplitRule(value, index, knownRuleNames)) {
      segments.push(current);
      current = "";
      continue;
    }

    current += character;
  }

  segments.push(current);
  return segments;
}

function splitOptions(value: string) {
  const segments: string[] = [];
  let current = "";

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];
    const nextCharacter = value[index + 1];

    if (character === "\\" && nextCharacter === SEPARATOR_OPTION) {
      current += SEPARATOR_OPTION;
      index += 1;
      continue;
    }

    if (character === SEPARATOR_OPTION) {
      segments.push(current);
      current = "";
      continue;
    }

    current += character;
  }

  segments.push(current);
  return segments;
}

function normalizeRuleKey(name: string, index: number) {
  return `${name || "rule"}-${index}`.replace(/[^A-Za-z0-9_-]/g, "-");
}

export function parseRules(value: string, ruleNames: string[]) {
  const knownRuleNames = new Set(ruleNames);

  return splitRules(value, knownRuleNames)
    .map((segment, index): ParsedRule | null => {
      const parts = splitOptions(segment.trim());
      const name = parts.shift()?.trim() ?? "";
      if (!name) return null;

      const error = parts.length > 0 ? String(parts.pop()) : "";
      const options = name === "regex" ? [parts.join(SEPARATOR_OPTION)] : parts;

      return {
        name,
        options,
        error,
        key: normalizeRuleKey(name, index),
      };
    })
    .filter((rule): rule is ParsedRule => Boolean(rule));
}
