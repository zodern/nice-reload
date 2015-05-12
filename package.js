Package.describe({
  version: "1.0.2",
  name: "zodern:nice-reload",
  summary: "Trigger live reload with ctr + l",
  debugOnly: true,
  documentation: 'README.md',
  git: "https://github.com/zodern/nice-reload.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use('underscore', 'client');
  api.use('reload', 'client');
  api.use('templating', 'client');

  api.addFiles('main.js', 'client');
  api.export('niceReload', 'client');
});

