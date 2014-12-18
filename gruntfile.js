module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      app: {
        src: ['app/*.js', '*.js']
      }
    }
  });

  grunt.registerTask('lint', 'Lint the Javascript',[
    'jshint'
  ]);
};
