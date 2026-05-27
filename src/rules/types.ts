export type RuleInput = HTMLInputElement | HTMLTextAreaElement;
export type RuleOption = RegExp | string | number;
export type RuleResult = boolean | number;

export type ValidationRule = (input: RuleInput, ...options: RuleOption[]) => RuleResult;
