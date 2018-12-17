export default {
  // For firebase: we need to include all node_modules in server bundle
  externalsWhitelist: [
    () => {
      return true;
    },
  ],

  // Defined plugins on server
  plugins: [
    '@uvue/server/plugins/serverError',
    '@uvue/server/plugins/modernBuild',
    [
      '@uvue/server/plugins/cookie',
      {
        secret: 'shhhhh',
      },
    ],
  ],
};
