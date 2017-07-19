/**
 * This does nothing more than adding
 * .pug files to the webpack context.
 * @param file
 */
(file => { file.keys().forEach(file) })(require.context('./resources/views/', false, /\.pug$/));
