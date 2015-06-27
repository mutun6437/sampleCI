var gulp = require("gulp");

console.log("gulpします");


var sass = require("gulp-sass");
 
gulp.task("sass", function() {
    gulp.src("lib/StyleSheet/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets"));
});


gulp.task('default', ['coffee'], function() {
  console.log('done');
});