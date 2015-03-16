module.exports = function(grunt) {

    // --- CONFIGURE GRUNT ---

    grunt.initConfig({

        // jshint: check all js files for errors
        jshint: {
            all: ['public/js/**/*.js']
        },

        // watch: watch css and js files and process the above tasks
        watch: {
            css: {
                files: ['public/css/**/*.css'],
                tasks: []
            },
            js: {
                files: ['public/js/**/*.js'],
                tasks: ['jshint']
            }
        },

        // nodemon: run a nodemon monitor of your node.js server
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        // concurrent: run grunt tasks concurrently
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }
    });

    // --- LOAD GRUNT PLUGINS ---
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    // --- CREATE TASKS ---
    grunt.registerTask('default', ['jshint', 'concurrent']);
};