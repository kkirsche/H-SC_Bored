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
                    'css/bootstrap.css' : 'scss/bootstrap.scss',
                    'css/HSCBoredAutumn.css' : 'scss/HSCBoredAutumn.scss',
                    'css/FontAwesome.css' : 'scss/font-awesome.scss'
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
