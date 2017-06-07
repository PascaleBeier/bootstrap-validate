/**
 * This does nothing more than adding
 * .pug files to the webpack context.
 * @param file
 */
requireSourceFiles = file => {
  file.keys().forEach(file);
};

// Bring it up!
requireSourceFiles(require.context('./resources/views/', false, /\.pug$/));
