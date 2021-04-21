const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const csso = require('gulp-csso');
const less = require('gulp-less');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


gulp.task('first', () => {
    console.log(11111);
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css'))
});

gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('csso', () => {
    gulp.src(['./src/css/*.css', './src/css/*.less'])
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'))

})

gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('copy', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'))
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'))
})

gulp.task('watch', ['htmlmin', 'csso', 'jsmin', 'copy']);