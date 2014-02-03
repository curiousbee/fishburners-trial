module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      dev: {
        options: {
          style: 'expanded',
          trace: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass:dev'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: ['*.html'],
        options: {
          livereload: true,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          livereload: true,
        }
      }
    }
  });

  // Contrib modules.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task (run server, watch for changes).
  grunt.registerTask('default', ['connect', 'watch']);

  // Build task for distribution.
  grunt.registerTask('build', ['sass:dist']);
};
