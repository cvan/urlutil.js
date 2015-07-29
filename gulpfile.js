var fs = require('fs');

var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

function exportType(moduleType, prefix) {
  prefix = prefix || '';
  return gulp.src('src/urlutil.js')
    .pipe(babel({
      modules: moduleType
    }))
    .pipe(rename(prefix + 'urlutil.js'))
    .pipe(gulp.dest('dist'));
}

/**
 * Export to AMD modules.
 */
gulp.task('babel-amd', function() {
  return exportType('amd');
});

/**
 * Export to CommonJS modules.
 */
gulp.task('babel-common', function() {
  return exportType('common', 'node-');
});


/**
 * Specialized export task for JSCore (Apple) implementations.
 * Polyfills the URL and other needed objects.
 */
gulp.task('jscore', function() {
  return gulp.src([
      'src/url-polyfill.js',
      'src/urlutil.js'
    ])
    .pipe(concat('jscore-urlutil.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('jscore-transpiled', function(cb) {
  return browserify({
      entries: [
        'src/url-polyfill.js',
        'src/urlutil.js'
      ]
    })
    .transform(babelify.configure({}))
    .bundle()
    .on('error', function (err) {
      console.error('[jscore-transpiled] Error occurred:\n', err.stack);

      // But don't error out the stream.
      cb();
    })
    .pipe(fs.createWriteStream('dist/jscore-urlutil-transpiled.js'));
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

gulp.task('default', ['babel-amd', 'babel-common', 'jscore', 'docs']);
