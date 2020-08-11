"use strict"
global.$ = {
    gulp : require('gulp'),
    bs : require('browser-sync').create(),
    gp : require('gulp-load-plugins')(),
    path: {
        tasks:require("./gulp/config/tasks.js")
    }
}
$.path.tasks.forEach((taskPath)=>{
    require(taskPath)()
})

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug',"stylus",'scripts:lib','scripts', "img:dev",'font',"svg"),
    $.gulp.parallel('watch',"serve"),
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug',"stylus",'scripts:lib','scripts', "img:build",'font','svg'),
    $.gulp.parallel('watch',"serve"),
));

