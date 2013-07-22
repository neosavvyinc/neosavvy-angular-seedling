basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'main/resources/lib/angular/angular.js',
  'main/resources/lib/angular/angular-mocks.js',

  'main/resources/application/**/*.js',

//  'resources/application/**/*-constants.js',
//  'resources/application/**/*-service.js',
//  'resources/application/**/*-controller.js',
//  'resources/application/**/*-filter.js',
//  'resources/application/**/*-directive.js',
  'test/resources/application/**/*-spec.js'

];

autoWatch = true;

browsers = ['PhantomJS'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
