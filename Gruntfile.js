module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                precision: 5
            },
            dist: {
                options: {
                    style: 'compressed', //compact, compressed, nested or expanded
                    sourcemap: true
                },
                files: {
                    'public/css/bootstrap.css' : 'public/scss/bootstrap.scss',
                    'public/css/theme.css' : 'public/scss/theme.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.registerTask('default',['watch']);
};