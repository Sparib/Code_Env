var gulp = require('gulp');
var ts = require("gulp-typescript");
var preserveWhitespace = require('gulp-preserve-typescript-whitespace');
 
gulp.task("compile-ts", function () {
    return gulp.src('src/**/*.ts')
        .pipe(preserveWhitespace.saveWhitespace({
            preserveNewLines: true,
            preserveMultipleSpaces: true,
            preserveSpacesBeforeColons: true,
            collapseSpacesBeforeRemovedColons: true,
            preserveSameLineElse: true
        }))    // Encodes whitespaces/newlines so TypeScript compiler won't remove them
        .pipe(ts({ removeComments: false }))          // TypeScript compiler must be run with "removeComments: false" option
        .js
        .pipe(preserveWhitespace.restoreWhitespace()) // Restores encoded whitespaces/newlines
        .pipe(gulp.dest("dist"));
});