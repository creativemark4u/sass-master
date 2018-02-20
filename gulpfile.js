var gulp = require('gulp'); 
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jscrambler = require('gulp-jscrambler');
var imagemin = require('gulp-imagemin');

// Compile SASS files
gulp.task('sass', function() {
    //return gulp.src('lib/scss/*.scss')
    return gulp.src('lib/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

// Compile minified css file
gulp.task('minify-css', function() {
    return gulp.src('assets/css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
});

// Combine, concate and minify JavaScript
gulp.task('scripts', function() {
    return gulp.src('lib/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

// Combine, concate and minify JavaScript
// gulp.task('minify-scripts', function() {
//     return gulp.src([
//             'assets/js/jquery-3.2.1.min.js',
//             'assets/js/jquery-ui.min.js',
//             'assets/js/bootstrap.min.js',
//             'assets/js/bootstrap-lightbox.min.js',
//             'assets/js/autosize.min.js',
//             'assets/js/chosen.jquery.min.js',
//             'assets/js/jquery.validate.min.js',
//             'assets/js/jquery.knob.min.js',
//             'assets/js/hideShowPassword.min.js',
//             'assets/js/jquery.passwordstrength.min.js',
//             'assets/js/jquery.nicescroll.min.js',
//             'assets/js/tinymce/tinymce.min.js',
//             'assets/js/moment.min.js',
//             'assets/js/endorsed.js'
//         ])
//         .pipe(concat('endorsed.min.js'))
//         .pipe(gulp.dest('assets/dist/js'))
//         .pipe(rename('endorsed.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('assets/dist/js'));
// });

// Minify and optimize images
gulp.task('minify-images', function() {
    return gulp.src('lib/img/*')
        .pipe(imagemin())
        // .pipe(imagemin([
        //     imagemin.gifsicle({interlaced: true}),
        //     imagemin.jpegtran({progressive: true}),
        //     imagemin.optipng({optimizationLevel: 5}),
        //     imagemin.svgo({
        //         plugins: [
        //             {removeViewBox: true},
        //             {cleanupIDs: false}
        //         ]
        //     })
        // ]))
        .pipe(gulp.dest('assets/img'));
});

// Minify and optimize form images
gulp.task('minify-form-images', function() {
    return gulp.src('lib/img/forms/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img/forms'));
});

// Minify and optimize icon images
gulp.task('minify-icon-images', function() {
    return gulp.src('lib/img/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img/icons'));
});

// Minify and optimize jquery ui images
gulp.task('minify-social-images', function() {
    return gulp.src('lib/img/icons/social/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img/icons/social'));
});

// Minify and optimize social icon images
gulp.task('minify-jqueryui-images', function() {
    return gulp.src('lib/img/jquery-ui/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img/jquery-ui'));
});

// Minify and optimize all images
gulp.task('minify-all-images', ['minify-images', 'minify-form-images', 'minify-icon-images', 'minify-social-images']);

// Watch
gulp.task('watch', function() {
    gulp.watch('lib/scss/*.scss', [sass]);
    gulp.watch('assets/css/endorsed.css', [minify-css]);
    gulp.watch('assets/js/*.js', [scripts]);
    gulp.watch('assets/img/*', [minify-images]);
});

// Default task
gulp.task('default', ['sass', 'minify-css', 'scripts']);