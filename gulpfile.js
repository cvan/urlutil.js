var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var babel = require('gulp-babel'); 

gulp.task('babel-amd', function () {
  return gulp.src('src/**.js')
    .pipe(babel({
      modules: 'amd'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('docs', function() {
  return gulp.src('src/**.js')
    .pipe(concat('README.md'))
    .pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
    .on('error', function(err){
        gutil.log('jsdoc2md failed:', err.message);
    })
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['babel-amd', 'docs']);