module.exports = () => {
  $.gulp.task("font", () => {
    return $.gulp
      .src("src/static/fonts/**/*.*")
      .pipe($.gulp.dest("build/static/fonts"));
  });
};
