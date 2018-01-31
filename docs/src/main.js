import 'bootstrap-loader';
import 'bootstrap.native/dist/bootstrap-native-v4';
import hljs from 'highlight.js';
hljs.initHighlightingOnLoad();
import bootstrapValidate from '../../src/bootstrap-validate';
window.bootstrapValidate = bootstrapValidate;
