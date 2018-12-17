const path = require('path');
const functions = require('firebase-functions');
const { Server } = require('@uvue/server');

// Create a UVue server
const server = new Server({
  distPath: path.resolve('dist'),
});

// Load and setup plugins
const esm = require('esm')(module); // esm package is needed to load plugins
server
  .addPlugin(esm('@uvue/server/plugins/serverError'))
  .addPlugin(esm('@uvue/server/plugins/cookie'), {
    secret: 'shhhh',
  });

// Setup our connect instance
server.setup();

exports.ssr = functions.https.onRequest(server.getApp());
