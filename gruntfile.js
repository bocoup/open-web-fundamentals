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
        tasks: ['jshint', 'concat']
      }
    },
    concat: {
      css_main: {
        src: [
          'app/vendor/Skeleton-2.0.2/css/*',
          'app/styles/*'
        ],
        dest: 'public/css/styles.css'
      }
    }
  });

  grunt.registerTask('dev', 'Development Mode', [
    'watch'
  ]);

  grunt.registerTask('default', 'dev');
};
