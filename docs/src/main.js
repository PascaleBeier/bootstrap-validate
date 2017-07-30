import 'bootstrap-loader';
import 'bootstrap.native';
import hljs from 'highlight.js';
hljs.initHighlightingOnLoad();
import bootstrapValidate from '../../src/bootstrap-validate';
window.bootstrapValidate = bootstrapValidate;
