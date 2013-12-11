module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg:grunt.file.readJSON('package.json'),

        shell: {
            symLink: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        console.log("Adding a symlink to /tmp for the seedling nginx host");
                        console.log(stdout);
                        console.log(stderr);
                        cb();
                    }
                },
                command: "if [ ! -L /tmp/seedling ]; then ln -s `pwd`/src/main/resources /tmp/seedling; fi"
            },
            rmSymLink: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        console.log("Removing the symlink from /tmp for the seedling nginx host");
                        console.log(stdout);
                        console.log(stderr);
                        cb();
                    }
                },
                command: "if [ ! -L /tmp/seedling ]; then rm /tmp/seedling; fi"
            },

            startNginx: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        console.log("Starting Nginx as sudo - enter your user's password");
                        console.log(stdout);
                        console.log(stderr);
                        cb();
                    }
                },
                command: "sudo nginx -c `pwd`/nginx.conf"
            },
            stopNginx: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        console.log("Stopping Nginx as sudo - enter your user's password");
                        console.log(stdout);
                        console.log(stderr);
                        cb();
                    }
                },
                command: "sudo pkill nginx"
            },
            testNginx: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        var output = stdout.split("\n");
                        if( output[0] === undefined || output[0] === "" ) {
                            console.log("You need to install nginx");
                            console.log("Run command: 'brew install nginx'")
                            return false;
                        } else {
                            console.log("You have nginx installed here: [" + output[0] + "]");
                        }
                        cb();

                    }
                },
                command: "which nginx"
            },
            testPkill: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        var output = stdout.split("\n");
                        if( output[0] === undefined || output[0] === "" ) {
                            console.log("You need to install pkill");
                            console.log("Run command: 'brew install proctools'")
                            return false;
                        } else {
                            console.log("You have pkill installed here: [" + output[0] + "]");
                        }
                        cb();

                    }
                },
                command: "which pkill"
            },
            testRuby: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        var output = stdout.split("\n");
                        if( output[0] === undefined || output[0] === "" ) {
                            console.log("You need to install Ruby");
                            return false;
                        } else {
                            console.log("You have Ruby installed here: [" + output[0] + "]");
                        }
                        cb();

                    }
                },
                command: "which ruby"
            },
            testSass: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        var output = stdout.split("\n");
                        if( output[0] === undefined || output[0] === "" ) {
                            console.log("You need to install Sass");
                            return false;
                        } else {
                            console.log("You have Sass installed here: [" + output[0] + "]")
                        }
                        cb();

                    }
                },
                command: "which sass"
            },
            compileFoundation: {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        console.log(stdout);
                        cb();
                    }
                },
                command: "cd <%= pkg.paths.sourceDirectory %>/lib/foundation && npm install && grunt test"
            },
            buildVersion : {
                options: {
                    callback: function( err, stdout, stderr, cb ) {
                        console.log(stdout);
                        cb();

                    }
                },
                command: [
                    "rm src/main/resources/buildinfo.txt",
                    "touch src/main/resources/buildinfo.txt",
                    "echo `date` >> src/main/resources/buildinfo.txt",
                    "echo 'Built from branch: ' `git rev-parse --abbrev-ref HEAD` >> src/main/resources/buildinfo.txt",
                    "cat src/main/resources/buildinfo.txt"
                ].join("&&")
            },
            renameCoverage: {
                options: {
                    callback: function( err, stdout, stderr, cb) {
                        console.log("Renaming Coverage Reports...");
                        cb();
                    }
                },
                command: [
                    "cd target/coverage",
                    "ls | sed -n 's/^Chrome.*/mv \"&\" Chrome/gp'  | sh"
                ].join("&&")

            }
        },

        banner:'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        clean: {
            clean: ['<%= pkg.paths.buildOutputDirectory %>'],
            bower: ['<%= pkg.paths.sourceDirectory %>/lib/']
        },

        copy: {
            browser: {
                files: [
                    {
                        expand:true,
                        cwd:'<%= pkg.paths.sourceDirectory %>',
                        src:[
                            '**/*',
                            '!assets/scss/**/*.scss',
                            '!lib/**/*',
                            'lib/q/q.js',
                            'lib/node-uuid/uuid.js',
                            'lib/lodash/lodash.compat.js',
                            'lib/jquery/jquery.js',
                            'lib/jquery-browser-detection/src/jquery.browser.detection.js',
                            'lib/swfobject/swfobject.js',
                            'lib/angular/angular.js',
                            'lib/angular-animate/angular-animate.js',
                            'lib/angular-aop/src/angular-aop.js',
                            'lib/angular-route/angular-route.js',
                            'lib/angular-cache/angular-cache.js',
                            'lib/angular-cookies/angular-cookies.js',
                            'lib/neosavvy-javascript-angular-core/neosavvy-javascript-angular-core.js',
                            'lib/neosavvy-javascript-core/neosavvy-javascript-core.js',
                            'lib/underscore.string/lib/underscore.string.js',
                            'lib/foundation/js/foundation/foundation.js',
                            'lib/foundation/js/foundation/foundation.forms.js',
                            'lib/foundation/js/foundation/foundation.dropdown.js',
                            'lib/foundation/js/vendor/custom.modernizr.js'

                        ],
                        dest: '<%= pkg.paths.buildOutputDirectory %>/browser/'
                    }
                ]
            },
            indexDebug: {
                files: [
                    {
                        expand:true,
                        cwd:'<%= pkg.paths.sourceDirectory %>',
                        src:[
                            'index.html'
                        ],
                        dest: '<%= pkg.paths.buildOutputDirectory %>/browser/'
                    }
                ]
            }
        },

        rename: {
            debug: {
                src:'<%= pkg.paths.buildOutputDirectory %>/browser/index.html',
                dest: './<%= pkg.paths.buildOutputDirectory %>/browser/index.debug.html'
            }
        },

        bower:{
            install:{
                options:{
                    targetDir:'<%= pkg.paths.libraries %>',
                    cleanup:true
                }
            }
        },

        concat:{
            options:{
                separator: ';'
            },
            dist:{
                src:[
                    'target/browser/application/application.js',
                    'target/browser/application/**/*.js'
                ],
                dest:'target/browser/<%= pkg.name %>.js'
            }
        },
        uglify:{
            options:{
                banner:'<%= banner %>'
            },
            dist:{
                src:'<%= concat.dist.dest %>',
                dest:'target/browser/<%= pkg.name %>.min.js'
            }
        },

        karma:{
            noCover: {
                configFile:'karma.conf.js',
                reporters: ['progress'],
                preprocessors: {}
            },
            unit:{
                configFile:'karma.conf.js'
            },
            build:{
                configFile:'karma.conf.js',
                singleRun:true,
                browsers:['Chrome']
            }
        },

        nodemon: {
            src: {
                options: {
                    file: 'src/main/resources/web-server.js',
                    args: [
                        '3000',
                        __dirname + '/src/main/resources/'
                    ],
                    cwd: __dirname,
                    logConcurrentOutput: true
                }
            },
            built: {
                options: {
                    file: 'target/browser/web-server.js',
                    args: [
                        '4000',
                        __dirname + '/src/main/resources/'
                    ],
                    cwd: __dirname,
                    logConcurrentOutput: true
                }
            }
        },
        open : {
            coverage : {
                path: 'http://127.0.0.1:4000/coverage/Chrome',
                app: 'Google Chrome'
            },
            src : {
                path: 'http://127.0.0.1:3000/',
                app: 'Google Chrome'
            }
        },
        concurrent: {
            dev: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['nodemon:built', 'open:coverage', 'nodemon:src', 'open:src']
            }
        },
        sass: {
            dist: {
                options: {
                    banner: '<%= banner %>',
                    lineNumbers: true
                },
                files: {
                    'src/main/resources/assets/css/app.css': 'src/main/resources/assets/scss/app.scss'
                }
            }
        },
        htmlrefs: {
            dist: {
                src: './src/main/resources/index.html',
                dest: './target/browser/'
            }
        },
        watch: {
            files: ['src/main/resources/assets/scss/**/*.scss'],
            tasks: 'sass'
        },
        compress: {
            main: {
                options: {
                    archive: 'target/activation-client.zip',
                    mode: 'zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'target/browser/',
                        src: ['**']
                    }
                ]
            }
        },
        ngtemplates:  {
            application:{
                cwd: 'target/browser/',
                src: 'application/**/*-ptl.html',
                dest: 'target/browser/application/view/templates.js'
            }
        }
    });

    grunt.task.registerMultiTask('buildDependencies', function() {
        grunt.log.writeln("Building for project dependency: " + this.target);

        grunt.util.spawn({
            cmd: 'grunt',
            args: ['test']
        }, function(error, result, code){

        })
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-htmlrefs');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-rename');


    /**
     * We have some external dependencies in our build. This should ensure
     * both are on your machine before letting the build complete.
     *
     * 1) Ruby is needed for SASS
     * 2) SASS is needed to compile CSS from SCSS
     * 3) Pkill is used to kill the nginx process if it is running
     * 4) NGINX is used to serve static content when you need more than Node can provide
     */
    grunt.registerTask('verify', [
        'shell:testRuby',
        'shell:testSass',
        'shell:testPkill',
        'shell:testNginx'
    ]);

    /**
     * Phase 2 is to resolve dependencies
     * - Right now we use Bower to do so.
     */
    grunt.registerTask('resolve', [
        'bower:install'
    ]);

    /**
     * Phase 3 is to copy resources from source directories to the target
     * -
     */
    grunt.registerTask('compile', [
        'shell:compileFoundation',
        'shell:buildVersion',
        'copy:indexDebug',
        'rename:debug',
        'copy',
//        'replace:activationCodeHelper',
        'ngtemplates',
        'concat:dist',
        'uglify:dist',
        'htmlrefs:dist'
    ]);

    /**
     * Phase 4 is to run tests against the pre-copied source and post-copied source
     */
    grunt.registerTask('runTests', [
        'karma:build',
        'shell:renameCoverage'
    ]);

    /**
     * Phase 5 is to deploy and start the application
     */
    grunt.registerTask('deploy', [
        'compress',
        'concurrent:dev'
    ]);

    /**
     * Never edit these lines. Always try to associate whatever you want to do with one of the above 5 phases!
     */
    grunt.registerTask('default', [
        'verify',               // All the verification needed to run a build should go here
        'clean',                // All the steps to fully clean your build output should be invoked from this phase
        'resolve',              // All the steps to resolve your dependencies should be done in this phase
        'compile',              // All the compilation/moving of files should be done as a result of compile
        'runTests',             // All asserted tests, integration tests, unit tests etc should be invoked in this phase
        'deploy'                // Any deployment and running of the output should be done from here
    ]);
    grunt.registerTask('ci', [
        'verify',               // All the verification needed to run a build should go here
        'clean',                // All the steps to fully clean your build output should be invoked from this phase
        'resolve',              // All the steps to resolve your dependencies should be done in this phase
        'compile',              // All the compilation/moving of files should be done as a result of compile
        'runTests'              // All asserted tests, integration tests, unit tests etc should be invoked in this phase
    ]);


    /**
     * NGINX Hooks
     */
    grunt.registerTask('start', [
        'shell:testNginx',
        'shell:symLink',
        'shell:startNginx'
    ]);
    grunt.registerTask('stop', [
        'shell:testPkill',
        'shell:rmSymLink',
        'shell:stopNginx'
    ]);
    grunt.registerTask('restart', [
        'stop',
        'start'
    ]);



};

