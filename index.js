var express  =  require( 'express' );
var multer   =  require( 'multer' );
var path = require('path');

var upload = multer( { dest: 'uploads/' } );
var app = express();
app.get( '/', function( req, res, next ){
  return res.sendFile( __dirname +'/index.html');
});

app.post( '/upload', upload.single( 'file' ), function( req, res, next ) {
  // Metadata about the uploaded file can now be found in req.file
});

app.listen( process.env.PORT || 5000, function() {
  console.log( 'Express server listening on port 8080' );
});
