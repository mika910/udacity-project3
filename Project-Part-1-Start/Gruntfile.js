/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dev: {
        src: ['images'],
      },
    },
    
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    responsive_images: {
       dev: {
          options: {
            engine: 'im',
            sizes: [{
              name: 'small',
              width: 2560,
              suffix: '_small',
              quality: 20,

            }]
         },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
         files: [{
           expand: true,
           src: ['*.{gif,jpg,png}'],
           cwd: 'images_src/',
           dest: 'images/'
         }]
       }
     },

    /* Clear out the images directory if it exists */


    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },

    imagemin:{
      dynamic:{
        files:[{
          expand: true,
          cwd:    'images_src/',
          src:    ['**/*.{png,jpg,gif}'],
          dest:   'images/'
        }]
      },
    },

});

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-mkdir');


  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'imagemin']);
};
