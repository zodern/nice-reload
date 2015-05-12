/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "Trigger a hot reload with control + n",
  // Version number.
  version: "1.0.0",
  // Optional.  Default is package directory name.
  name: "zodern:nice-reload",
  // Optional github URL to your source repository.
  git: "https://github.com/something/something.git",
});

/* This defines your actual package */
Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  api.versionsFrom('0.9.0');
  // Use Underscore package, but only on the server.
  // Version not specified, so it will be as of Meteor 0.9.0.
  api.use('underscore', 'client');
  // Use iron:router package, version 1.0.0 or newer.
  api.use('reload', 'client');
  api.use('templating', 'client');
  api.addFiles('main.js', 'client');
  api.export('niceReload', 'client');
});

