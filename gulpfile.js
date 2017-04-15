var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");


//Copiando todo conteudo da pasta scss para pasta Dist/Css


 gulp.task('move-scss',function (){
 	return gulp.src('./source/scss/*.scss')
 			 .pipe(sass())
 		   .pipe(gulp.dest('./dist/css')); 	
 });

//Enviando o conteudo html da pasta source para pasta Dist

 gulp.task('move-html',function (){
 	return gulp.src('./source/*.html')
 			 .pipe(htmlmin({collapseWhitespace: true}))
 		   .pipe(gulp.dest('./dist')); 	
 });

 //Usando o comando Task para escutar os arquivos selecionados

gulp.task('escutar',function(){
	gulp.watch('./source/scss/*.scss',['move-scss']);
	gulp.watch('./source/scss/*.html',['move-html']);
});