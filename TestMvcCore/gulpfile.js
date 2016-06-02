/// <binding BeforeBuild='scripts' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var webroot = "./wwwroot/";

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css",
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
    scriptsDest: webroot + "js/",
    npmLibDest: webroot + "npmlib/"
};

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean:npmlib", function (cb) {
    rimraf(paths.npmLibDest + '/*', cb);
});

gulp.task("clean", ["clean:js", "clean:css", "clean:npmlib"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("copy-deps:core-js", function () {
    return gulp.src('node_modules/core-js/client/shim.min.js', { base: 'node_modules/core-js/client/' })
         .pipe(gulp.dest(paths.npmLibDest + '/core-js/client/'));
});

gulp.task("copy-deps:zonejs", function () {
    return gulp.src('node_modules/zone.js/dist/**/*.*', { base: 'node_modules/zone.js/dist/' })
         .pipe(gulp.dest(paths.npmLibDest + '/zone.js/dist/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src('node_modules/reflect-metadata/*.*', { base: 'node_modules/reflect-metadata/' })
         .pipe(gulp.dest(paths.npmLibDest + '/reflect-metadata/'));
});

gulp.task("copy-deps:systemjs", function () {
    return gulp.src('node_modules/systemjs/dist/**/*.*', { base: 'node_modules/systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibDest + '/systemjs/dist/'));
});

gulp.task("copy-deps:angular", function () {
    return gulp.src('node_modules/@angular/**/*.js', { base: 'node_modules/@angular/' })
         .pipe(gulp.dest(paths.npmLibDest + '/@angular/'));
});

gulp.task("copy-deps:angular2-in-memory-web-api", function () {
    return gulp.src('node_modules/angular2-in-memory-web-api/**/*.js', { base: 'node_modules/angular2-in-memory-web-api/' })
         .pipe(gulp.dest(paths.npmLibDest + '/angular2-in-memory-web-api/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src('node_modules/rxjs/bundles/*.*', { base: 'node_modules/rxjs/bundles/' })
         .pipe(gulp.dest(paths.npmLibDest + '/rxjs/'));
});

gulp.task("copy-deps", ["copy-deps:core-js", "copy-deps:zonejs", "copy-deps:rxjs", "copy-deps:reflect-metadata", 'copy-deps:angular', 'copy-deps:angular2-in-memory-web-api', 'copy-deps:systemjs']);

gulp.task('copy-scripts', function () {
    return gulp.src(paths.scripts).pipe(gulp.dest(paths.scriptsDest));
});

gulp.task("scripts", ["clean:js", "copy-scripts"]);
