Package.describe({
  version: "1.0.0",
  name: "zodern:nice-reload",
  debugOnly: true,
  documentation: 'README.md',
  git: "https://github.com/something/something.git",
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.0');

  api.use('underscore', 'client');
  api.use('reload', 'client');
  api.use('templating', 'client');

  api.addFiles('main.js', 'client');
  api.export('niceReload', 'client');
});

