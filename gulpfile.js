var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('build', function() {
  return browserify({
      entries: './app.jsx',
      extensions: ['.jsx'],
      debug: true
    })
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});


gulp.task('js-watch', ['build'], browserSync.reload);

gulp.task('watch', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('*.jsx', ['js-watch']);
});

gulp.task('default', ['watch']);
