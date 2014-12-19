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
        tasks: ['jshint', 'concat', 'cssmin']
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
    },
    cssmin: {
      minify: {
        files: [{
          src: 'public/css/styles.css',
          dest: 'public/css/styles.min.css'
        }]
      }
    }
  });

  grunt.registerTask('dev', 'Development Mode', [
    'concat',
    'cssmin:minify',
    'watch'
  ]);

  grunt.registerTask('default', 'dev');
};
