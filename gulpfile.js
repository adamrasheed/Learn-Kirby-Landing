var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    del = require('del');

var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync');

var awspublish = require('gulp-awspublish');

const app = {
  root: 'app',
  html: 'app/*.html',
  styles: 'app/styles/**/*.scss',
  scripts: 'app/scripts/**/*.js',
  assets: 'app/assets/**/*'
}

const tmp = {
  root: 'tmp',
  html: 'tmp/*.html',
  styles: 'tmp/styles',
  scripts: 'tmp/scripts',
  assets: 'tmp/assets'
}

const dist = {
  root: 'dist',
  html: 'dist',
  styles: 'dist/styles',
  scripts: 'dist/scripts',
  assets: 'dist/assets/'
}

 // Browser Sync
gulp.task('browser-sync', () =>  {
  browserSync({
    server: {
      baseDir: tmp.root
    }
  });
});


// Reload
gulp.task('bs-reload', () => {
browserSync.reload();
});


// HTML
gulp.task('html', () => {
  return gulp.src(app.html)
    .pipe(gulp.dest(tmp.root))
    .pipe(browserSync.reload({stream:true}));
});

// Images
gulp.task('assets', () => {
gulp.src(app.assets)
  .pipe(cache(
    imagemin([
      imagemin.svgo({
        plugins: [{removeViewBox: true}]
      }),
      {
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
      }
    ])
  ))
  .pipe(gulp.dest(tmp.assets))
  .pipe(browserSync.reload({stream:true}));
});


// SASS
gulp.task('styles', () => {
  gulp.src([app.styles])
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
  }}))
  .pipe(sass())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest(tmp.styles))
  .pipe(browserSync.reload({stream:true}))
});


// SCRIPTS
gulp.task('scripts', () => {
return gulp.src([app.scripts, '!app/scripts/**/*.min.js'])
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
  }}))
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest(tmp.scripts))
  .pipe(browserSync.reload({stream:true}))
});


// Clean
gulp.task('clean', () => {
  return del([tmp.root, dist.root]);
});


// Build
gulp.task('build:tmp',
          ['clean', 'html', 'styles', 'scripts', 'assets']);

// Default
gulp.task('default', [ 'clean', 'build:tmp', 'browser-sync'], () => {
  gulp.watch(app.html, ['html']);
  gulp.watch(app.assets, ['assets']);
  gulp.watch(app.styles, ['styles']);
  gulp.watch(app.scripts, ['scripts']);
});

gulp.task('deploy',  () => {
  return gulp.src(app.root)
    .pip(gulp.dest(dist.root));
});