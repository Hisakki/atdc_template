var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var pug = require('gulp-pug');
var svgSprite = require('gulp-svg-sprite');


// Static Server + watching scss/html files
gulp.task('serve', ['sass','views'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/assets/sass/*.sass", ['sass']);
    gulp.watch("app/renders/*.pug", ['views']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/assets/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('views', function buildHTML() {
  return gulp.src('app/renders/*.pug')
  	.pipe(pug({'pretty': '    '}))
    .pipe(gulp.dest("app/"))
    .pipe(browserSync.stream());
});

// Fonction Sprite
gulp.task('sprite', function() {
  return gulp.src("app/assets/img/svg/**/*.svg")
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: 'sprite.svg'
        }
      }
    })
  )
  .pipe(gulp.dest("app/assets/img"));
});

gulp.task('default', ['serve']);