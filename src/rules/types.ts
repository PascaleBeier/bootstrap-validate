export type RuleInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type RuleOption = RegExp | string | number;
export type RuleResult = boolean | number | string;

export type ValidationRule = (input: RuleInput, ...options: RuleOption[]) => RuleResult;
