module.exports = function(grunt) {
  grunt.initConfig({


    concat : {
      options: {
        separator: ';',
      },
      dist : {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'
      }
    }, //concat


    uglify: {
        my_target: {
          files: {
            'builds/development/js/script.min.js' : ['components/scripts/*.js']
          }
        }
      }, //uglify


      compass: {
        dev: {
          options: {
            config: 'config.rb'
          }//options
        }//dev
      },//compass

    //wiredep: {
    //  task: {
    //    src: 'builds/development/**/*.html'
    //  }
  //  },

    connect: {
      sever: {
        options: {
          hostname: 'localhost',
          port: 9999,
          base: 'builds/development/',
          livereload: true
        }
      }
    },


    watch: {
      options: {
        spawn: false,
        livereload: true
      },//options
      script: {
        files: ['components/scripts/**/*.js'],
        tasks: ['concat']
      },//script
      html: {
        files: ['builds/development/*.html'],
      },//html
      css: {
        files: ['components/sass/**/*.scss'],
        tasks: ['compass']
      }//css
    }//watch



  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['connect', 'uglify', 'watch']);

}; //wrapper function
