type RuleInput = HTMLInputElement | HTMLTextAreaElement;
type ValidationTarget = RuleInput | string;
export default function bootstrapValidate(input: ValidationTarget | ValidationTarget[], string: string, callback?: (isValid: unknown) => void): void;
export {};
