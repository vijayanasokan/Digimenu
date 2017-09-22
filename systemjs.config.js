/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'dist', // 'dist',
    '@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'node_modules/rxjs'
   // ,'cdk': 'node_modules/@angular/cdk'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {  main: 'main.js',defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
       '@angular/cdk/a11y': {
                main: './../bundles/cdk-a11y.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/bidi': {
                main: './../bundles/cdk-bidi.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/coercion': {
                main: './../bundles/cdk-coercion.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/collections': {
                main: './../bundles/cdk-collections.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/keycodes': {
                main: './../bundles/cdk-keycodes.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/observers': {
                main: './../bundles/cdk-observers.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/overlay': {
                main: './../bundles/cdk-overlay.umd.js',
                defaultExtension: 'js'
            },

            '@angular/cdk/platform': {
                main: './../bundles/cdk-platform.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/portal': {
                main: './../bundles/cdk-portal.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/rxjs': {
                main: './../bundles/cdk-rxjs.umd.js',
                defaultExtension: 'js'
            },

            '@angular/cdk/scrolling': {
                main: './../bundles/cdk-scrolling.umd.js',
                defaultExtension: 'js'
            },
            '@angular/cdk/table': {
                main: './../bundles/cdk-table.umd.js',
                defaultExtension: 'js'
            },
            '@angular/animations': {
                main: './../bundles/animations.umd.min.js',
                defaultExtension: 'js'
            },
            '@angular/animations/browser': {
                main: './../bundles/animations-browser.umd.js',
                defaultExtension: 'js'
            },
            '@angular/platform-browser/animations': {
                main: './../bundles/platform-browser-animations.umd.js',
                defaultExtension: 'js'
            },

  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
    'material',
   // 'cdk',
    'animations'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages,
    defaultJSExtension: true
  };
  System.config(config);
})(this);