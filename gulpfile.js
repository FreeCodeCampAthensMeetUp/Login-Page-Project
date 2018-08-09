// This file create all the Route that will be needed for SCSS to be Compiled to Regular CSS.
// It also watches for any changes in the following file: HTML, SCSS,JS.

const gulp = require("gulp")
const browserSync = require("browser-sync").create()
const sass = require("gulp-sass")

gulp.task("sass", ()=> {
  return gulp.src(["src/sass/*.scss"])
  .pipe(sass())
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream())
})

gulp.task("serve", ["sass"], ()=> {
  browserSync.init({
    server: "./src"
  })
  gulp.watch(["src/sass/*.scss"], ["sass"])
  gulp.watch(["src/*.html"]).on("change", browserSync.reload)
  gulp.watch(["src/*.js"]).on("change", browserSync.reload)
})

gulp.task("default", ["serve"])