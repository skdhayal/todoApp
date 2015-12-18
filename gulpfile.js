var gulp = require('gulp'),
    connect = require('gulp-connect'),
    gulp_shell = require('gulp-shell'),
    exec = require('child_process').exec;

function runCommand(command) {
    return function(cb) {
        exec(command, function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
    }
}
gulp.task('start-mongo', runCommand('mongod --dbpath C:/data/db'));
gulp.task('start-app', runCommand('node server.js'));
gulp.task('default', ['start-app', 'start-mongo']);
