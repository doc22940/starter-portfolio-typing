var compressor = require('node-minify');

compressor.minify({
  compressor: 'uglifyjs',
  input: [
    "node_modules/js-console/console.js",
    "initialize.js",
    "commands.js",
    "biography.js",
  ],
  output: 'total.min.js'
}).then(function(){

})
.catch(function(err) {
  console.log(err);
});
