var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
 
gulp.task('default', function() {
  return gulp.src('src/**.js')
    .pipe(concat('README.md'))
    .pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
    .on('error', function(err){
        gutil.log('jsdoc2md failed:', err.message);
    })
    .pipe(gulp.dest('.'));
});
