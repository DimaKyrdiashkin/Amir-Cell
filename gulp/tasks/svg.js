module.exports = ()=>{
    $.gulp.task('svg', ()=>{
        return $.gulp.src('src/static/svg/**/*.svg')
            .pipe($.gulp.dest('build/static/svg/'))
            .on('end', $.bs.reload)
    })
}