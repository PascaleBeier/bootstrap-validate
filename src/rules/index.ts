import min from "./min";
import max from "./max";
import email from "./email";
import required from "./required";
import url from "./url";
import integer from "./integer";
import numeric from "./numeric";
import alphanum from "./alphanum";
import ISO8601 from "./iso8601";
import regex from "./regex";
import divisible from "./divisible";
import contains from "./contains";
import startsWith from "./startsWith";
import endsWith from "./endsWith";
import matches from "./matches";
import alpha from "./alpha";
import inArray from "./inArray";
import requiredUnless from "./requiredUnless";
import text from "./text";
import between from "./between";

export type { RuleInput, RuleOption, RuleResult, ValidationRule } from "./types";

const rules = {
  min,
  max,
  email,
  required,
  url,
  integer,
  numeric,
  alphanum,
  ISO8601,
  regex,
  divisible,
  contains,
  startsWith,
  endsWith,
  matches,
  alpha,
  inArray,
  requiredUnless,
  text,
  between,
};

export default rules;
