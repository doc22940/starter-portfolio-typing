var compressor = require('node-minify');
// var yui = require('@node-minify/yui');

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

compressor.minify({
  compressor: "sqwish",
  input: ["node_modules/js-console/console.css"],
  output: 'total.min.css',
  type: 'css'
}).then(function(){}).catch(function(err){
  console.log(err);
});