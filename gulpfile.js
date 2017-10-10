var gulp = require('gulp'),
plumber = require('gulp-plumber'),
rename = require('gulp-rename'),
del = require('del');

var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
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
  html: 'tmp/index.html',
  styles: 'tmp/styles/*.css',
  scripts: 'tmp/scripts/*.js',
  assets: 'tmp/assets'
}

const dist = {
  root: 'dist',
  html: 'dist/*.html',
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

gulp.task('bs-reload', function () {
browserSync.reload();
});


// HTML
gulp.task('html', () => {
  return gulp.src(app.html)
    .pipe(gulp.dest(tmp.html));
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
  .pipe(gulp.dest(tmp.assets));
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
.pipe(rename({suffix: '.min'}))
.pipe(minifycss())
.pipe(gulp.dest(tmp.styles))
.pipe(browserSync.reload({stream:true}))
});


// SCRIPTS
gulp.task('scripts', () => {
return gulp.src(app.scripts)
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
  }}))
  .pipe(babel())
  .pipe(gulp.dest(tmp.scripts))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest(tmp.scripts))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('clean', () => {
  return del([tmp.root]);
});

gulp.task('build', ['clean', 'html', 'styles', 'scripts', 'assets'], () => {
  gulp.src(app.root)
  .pipe(gulp.dest(tmp.root))

});

gulp.task('default', [ 'build', 'browser-sync'], () => {
gulp.watch(app.styles, ['styles']);
gulp.watch(app.scripts, ['scripts']);
gulp.watch(app.html, ['bs-reload']);
});






gulp.task('deploy',  () => {
  return gulp.src(app.root)
    .pip(gulp.dest(dist.root));
});