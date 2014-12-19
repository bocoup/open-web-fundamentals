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
        files: ['app/*.js', 'app/styles/*', '*.js'],
        tasks: ['jshint', 'concat']
      }
    },
    concat: {
      css_main: {
        src: [
          'app/styles/*',
          'app/vendor/Skeleton-2.0.2/css/*'
        ],
        dest: 'public/css/styles.css'
      }
    }
  });

  grunt.registerTask('dev', 'Development Mode', [
    'concat',
    'watch'
  ]);

  grunt.registerTask('default', 'dev');
};
