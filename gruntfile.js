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
    },
    watch: {
      app: {
        files: ['app/*.js', '*.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.registerTask('lint', 'Lint the Javascript',[
    'jshint'
  ]);

  grunt.registerTask('dev', 'Development Mode', [
    'watch'
  ]);

  grunt.registerTask('default', 'dev');
};
