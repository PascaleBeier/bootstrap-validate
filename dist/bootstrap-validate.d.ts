export type RuleInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type RuleOption = RegExp | string | number;
export type RuleResult = boolean | number | string;
export type ValidationRule = (input: RuleInput, ...options: RuleOption[]) => RuleResult;
type ValidationTarget = RuleInput | string;
type ValidationCallback = (isValid: unknown) => void;
export interface ValidationHandle {
    element: RuleInput;
    validate: () => boolean;
    destroy: () => void;
}
export interface BootstrapValidate {
    (input: ValidationTarget | ValidationTarget[], string: string, callback?: ValidationCallback): ValidationHandle | ValidationHandle[];
    extendRule: (name: string, rule: ValidationRule) => void;
}
declare const bootstrapValidate: BootstrapValidate;
export default bootstrapValidate;
