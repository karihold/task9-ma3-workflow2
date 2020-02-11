module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'dist/css/style.css': 'less/style.less'
        }
      },
      production: {
        files: {
          'dist/css/style.css': 'less/style.less'
        }
      }
    },
    watch: {
      css: {
        files: 'less/style.less',
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    },
    imagemin: {
      static: {
        options: {
          optimizationLevel: 3
        },
        files: {
          'dist/images/kitten1.jpg': 'images/kitten1.jpg',
          'dist/images/kitten2.jpg': 'images/kitten2.jpg',
          'dist/images/kitten3.jpg': 'images/kitten3.jpg'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          hostname: 'localhost',
          open: true,
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['imagemin', 'connect:server', 'watch']);
};
