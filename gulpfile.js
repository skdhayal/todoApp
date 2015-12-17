var gulp = require('gulp'),
    connect = require('gulp-connect'),
    gulp_shell = require('gulp-shell'),
    exec = require('child_process').exec;


// gulp.task('mongod', function(){
// 	return gulp.src('')
// 		.pipe(gulp_shell(['mongod --dbpath=data --C:/Program Files/MongoDB 2.6 Standard/bin/mongod.exe']));
// });

//Running mongo
//http://stackoverflow.com/a/28048696/46810
// gulp.task('start-mongo', runCommand('mongod --dbpath ./data/'));
// gulp.task('stop-mongo', runCommand('mongo --eval "use admin; db.shutdownServer();"'));

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('start-app', runCommand('node server.js'));
// gulp.task('connect', function() {
//     connect.server();
// });
gulp.task('default', ['start-app']);