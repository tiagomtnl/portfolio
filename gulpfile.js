// *********************************** VARIABLES *********************************** //

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var sass = require('gulp-sass');
var twig = require('gulp-twig');

// *********************************** PATHS *********************************** //

// Source paths
var input = './app'; 
var inputSass = input + '/sass/**/*.scss'; // Sass to Css
var inputTwig = input + '/template/*.twig'; // Twig to HTML
var inputJs = input + '/js/**/*.js'; // JS
// Dist paths
var output = './public'; 
var outputSass = output + '/css/';  // Sass to Css
var outputTwig = output;  // Twig to HTML
var outputJs = output + '/js/'; // ES6 to JS

// *********************************** TASKS *********************************** //

// Compile twig template
gulp.task('twigCompile', function () {
    return gulp.src(input + '/template/index.twig')
        .pipe(twig({
            data: {} // include Data
        }))
        .pipe(gulp.dest(outputTwig));
});

// Compile Scss
gulp.task('sass', function() {
    return gulp.src(inputSass)
        .pipe(sass())
        .pipe(gulp.dest(outputSass))
        .pipe(browserSync.stream());
});

// Compile JS
gulp.task('scripts', function() {
    return gulp.src(inputJs)
        .pipe(babel())    
        .pipe(concat('all.js'))
        .pipe(gulp.dest(outputJs))
        .pipe(browserSync.stream());
  });

// Fonts to public
gulp.task('fonts', function() {
    return gulp.src(input + '/fonts/*')
        .pipe(gulp.dest(output + '/fonts/'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'twigCompile'], function() {

    // Base directory of application
    browserSync.init({
        server: output
    });

    // Watch files
    gulp.watch(inputSass, ['sass']);
    gulp.watch(inputTwig, ['twigCompile']);
    gulp.watch(inputJs, ['scripts']);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);