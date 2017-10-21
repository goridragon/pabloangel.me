'use strict'

var gulp = require('gulp'),
	chalk = require('chalk'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	stylus = require('gulp-stylus'),
	cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	refresh = require('gulp-refresh'),
	environments = require('gulp-environments');

// Configure
var development = environments.development;
var production = environments.production;

// Error Hadler
var onHandleError = function(err){
	console.log(chalk.red(err.toString()));
	this.emit('end');
};

var plumberOptions = {
  errorHandler: onHandleError,
};

// Limpiar Directorios
gulp.task('clean', function(){
	return del(['static'], {force: true});
});

// Copiar Archivos Fonts
gulp.task('fonts', function(){
	del(['static/fonts/*'], {force: true})
	return gulp.src('source/fonts/**')
		.pipe(plumber())
		.pipe(gulp.dest('static/fonts'))
});

// Copiar Archivos Images
gulp.task('images', function(){
	del(['static/images/*'], {force: true})
	return gulp.src('source/images/**')
		.pipe(plumber())
		.pipe(production(imagemin()))
		.pipe(gulp.dest('static/images'))
});

gulp.task('copy', ['fonts','images']);

// Compilar Stylus a CSS
gulp.task('styles', function(){
	del(['static/stylesheets/*'], {force: true})
	return gulp.src('source/stylesheets/*.styl')
		.pipe(plumber(plumberOptions))
		.pipe(development(sourcemaps.init()))
		.pipe(stylus({linenos: false}))
		.pipe(production(cleanCSS({compatibility: 'ie8'})))
		.pipe(rename({suffix: '.bundle'}))
		.pipe(development(sourcemaps.write('.')))
		.pipe(gulp.dest('static/stylesheets'))
		.pipe(refresh())
});

// Escuchar Cambios
gulp.task('watch', function(){
	console.log(chalk.cyan('===> Listening to changes....'));
	gulp.watch('source/fonts/**', ['fonts']);
	gulp.watch('source/images/**', ['images']);
	gulp.watch('source/stylesheets/**/*.styl', ['styles']);
	refresh.listen();
});

// Construir Todo
gulp.task('build', ['clean'], function(){
	console.log(chalk.green('===> Building ...'));
	gulp.start('copy', 'styles');
});

// Por Defecto
gulp.task('default', function(){
	gulp.start('build');
});
