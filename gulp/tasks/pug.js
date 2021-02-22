module.exports = () => {
  $.gulp.task("pug", () => {
    return $.gulp
      .src("src/pug/pages/*/*.html")
      .pipe($.gulp.dest("build"))
      .on("end", $.bs.reload);
  });
};
