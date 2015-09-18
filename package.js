Package.describe({
  version: "2.0.0",
  name: "zodern:nice-reload",
  summary: "Trigger hot reload with ctr + l (alt + l on Windows)",
  debugOnly: true,
  documentation: 'README.md',
  git: "https://github.com/zodern/nice-reload.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.1');

  api.use('underscore', 'client');
  api.use('reload', 'client');
  api.use('templating', 'client');

  api.addFiles('main.js', 'client');
  api.export('niceReload', 'client');
});

