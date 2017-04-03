/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  //css import is special, it merges into the css under dist/assets
  app.import('vendor/fa/css/font-awesome.min.css');
  //fonts, will keep the folder, dist/fa/....
  //here, I don't want to change  fa css at all, let specify the dest
  app.import('vendor/fa/fonts/fontawesome-webfont.woff2',{destDir:'fonts'});
  app.import('vendor/fa/fonts/fontawesome-webfont.woff',{destDir:'fonts'});  
  app.import('vendor/fa/fonts/fontawesome-webfont.ttf',{destDir:'fonts'});
  app.import('vendor/fa/fonts/fontawesome-webfont.svg',{destDir:'fonts'});


//  app.import('vendor/simplebar/simplebar.css');
//  app.import('vendor/simplebar/simplebar.js');

  return app.toTree();
};
