var path = require('path');
var spawn = require('child_process').spawn;

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            "compass": {
                "files": [
                    "grails-app/assets/stylesheets/**/*.sass",
                    "grails-app/assets/stylesheets/**/*.scss"],
                "options": {
                    interrupt: true,
                    "customPort": false,
                    "livereload": 1600,
                    "spawn": true
                },
                "tasks": [
                    "compassClean", "compass:promo"
                ]
            },
            html2js: {
                files: [
                    'templates/**/*.html'
                ],
                tasks: ['html2js'],
                options: {
                    interrupt: true
                }
            }
        },
        compass: {
            "promo": {
                "options": {
                    "sassDir": "grails-app/assets/stylesheets",
                    "cssDir": "grails-app/assets/stylesheets",
                    "specify": ["grails-app/assets/stylesheets/base.sass"]
                }
            }
        },
        html2js: {
            website: {
                options: {
                    base: 'templates/',
                    module: 'templates'
                },
                files: [{ src: ['templates/*.html'], dest: 'app/js/templates.js' }]
            }            
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('templateCache', ['html2js']);

    grunt.registerTask('compassClean', '', function () {
        var done = this.async();
        var clean = spawn('cmd', ['/c', 'compass clean'])

        clean.stdout.pipe(process.stdout);
        clean.stderr.pipe(process.stderr);

        done();
    });

    grunt.registerTask('watch:all', '', function (_port_) {
        var done = this.async();
        var initCache, html2js, compass;

        // NOTE: Write templateCache's upon launch
        initCache = spawn('cmd', ['/c', 'grunt html2js']);

        // NOTE: Watch for html changes, then write templateCache upon html changes
        html2js = spawn('cmd', ['/c', 'grunt watch:html2js']);

        // NOTE: Watch for Sass changes, run compass upon sass changes
        //compass = spawn('cmd', ['/c', 'grunt watch:compass']);

        initCache.stdout.pipe(process.stdout);
        initCache.stderr.pipe(process.stderr);
        //html2js.stdout.pipe(process.stdout);
        //html2js.stderr.pipe(process.stderr);
        //compass.stdout.pipe(process.stdout);
        //compass.stderr.pipe(process.stderr);
    });
};