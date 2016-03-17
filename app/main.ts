/// <reference path="../typings/browser" />

'use strict';

require.config({
  baseUrl: 'js',
  paths: {
    backbone: 'vendor/backbone',
    handlebars: 'vendor/handlebars',
    jquery: 'vendor/dist/jquery',
    'backbone.babysitter': 'vendor/lib/backbone.babysitter',
    'backbone.marionette': 'vendor/lib/core/backbone.marionette',
    'backbone.radio': 'vendor/build/backbone.radio',
    text: 'vendor/text',
    underscore: 'vendor/underscore',
  },
});

require(['app']);
