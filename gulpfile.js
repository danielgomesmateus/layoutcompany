const gulp         =  require('gulp');
const gulpConcat   =  require('gulp-concat');
const gulpCssMin   =  require('gulp-cssmin');
const gulpJsMin    =  require('gulp-jsmin');
const gulpRename   =  require('gulp-rename');
const gulpImageMin =  require('gulp-imagemin');

gulp.task('default', ['jsMin', 'cssMin', 'imagesMin', 'logo']);

gulp.task('jsMin', () => {
  gulp.src(['dev/js/jquery/jquery-3.0.0.js', 'dev/js/bootstrap/bootstrap.js', 'dev/js/script.js'])
    .pipe(gulpConcat('app.js'))
    .pipe(gulpJsMin())
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('cssMin', () => {
  gulp.src(['dev/css/bootstrap/bootstrap.min.css', 'dev/css/style.css'])
    .pipe(gulpConcat('style.css'))
    .pipe(gulpCssMin())
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('imagesMin', () => {
  gulp.src(['dev/images/*'])
    .pipe(gulpImageMin())
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('logo', () => {
  gulp.src(['dev/images/logo/*'])
    .pipe(gulpImageMin())
    .pipe(gulp.dest('dist/images/logo/'));
});

gulp.task('observer', () => {
  gulp.watch(['dev/js/jquery/jquery-3.0.0.min.js', 'dev/js/bootstrap/bootstrap.min.js', 'dev/js/script.js'], ['jsMin']);
  gulp.watch(['dev/css/bootstrap/bootstrap.min.css', 'dev/css/style.css'], ['cssMin']);
  gulp.watch('dev/images/*', ['imagesMin']);
  gulp.watch('dev/images/logo/*', ['logo']);
});
