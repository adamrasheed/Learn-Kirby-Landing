var gulp = require('gulp'),
plumber = require('gulp-plumber'),
rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var ghPages = require('gulp-gh-pages');


const build = {
  styles: 'build/styles',
  scripts: 'build/scripts'
}

gulp.task('browser-sync', () =>  {
browserSync({
server: {
   baseDir: "./"
}
});
});

gulp.task('bs-reload', function () {
browserSync.reload();
});

gulp.task('images', () => {
gulp.src('app/images/**/*')
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
  .pipe(gulp.dest('build/images/'));
});

gulp.task('styles', () => {
gulp.src(['app/styles/**/*.scss'])
.pipe(plumber({
  errorHandler: function (error) {
    console.log(error.message);
    this.emit('end');
}}))
.pipe(sass())
.pipe(autoprefixer('last 2 versions'))
.pipe(gulp.dest('build/styles/'))
.pipe(rename({suffix: '.min'}))
.pipe(minifycss())
.pipe(gulp.dest('build/styles/'))
.pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', () => {
return gulp.src('app/scripts/**/*.js')
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
  }}))
  .pipe(concat('main.js'))
  .pipe(babel())
  .pipe(gulp.dest('build/scripts/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('build/scripts/'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['browser-sync'], () => {
gulp.watch("app/styles/**/*.scss", ['styles']);
gulp.watch("app/scripts/**/*.js", ['scripts']);
gulp.watch("*.html", ['bs-reload']);
});


gulp.task('deploy', ['default'], () => {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});