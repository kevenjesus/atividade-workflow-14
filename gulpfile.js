
//Copiando todo conteudo da pasta scss para pasta Dist/Css

var gulp = require("gulp");
 gulp.task('move-scss',function (){
 	return gulp.src('./source/scss/*.scss')
 		   .pipe(gulp.dest('./dist/css')); 	
 });

//Enviando o conteudo html da pasta source para pasta Dist

 var gulp = require("gulp");
 gulp.task('move-html',function (){
 	return gulp.src('./source/*.html')
 		   .pipe(gulp.dest('./dist')); 	
 });

 //Usando o comando Task para escutar os arquivos selecionados

gulp.task('estilo',function(){
	gulp.watch('./source/scss/*.scss',['move-scss']);
	gulp.watch('./source/scss/*.html',['move-scss']);
});