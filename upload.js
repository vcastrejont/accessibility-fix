var AWS, body, bucket, contentType, file, fs, location, path, remote_folder, s3, zlib;
AWS = require('aws-sdk');

fs = require('fs');
zlib = require('zlib');
path = require('path');
bucket = 'otstatic-cdn';
remote_folder = 'accessibility';
var p =  path.resolve('./fixes/');

fs.readdir(p, function (err, files) {
  if (err) {
      throw err;
  }
  console.log('Uploading files:');
  files.map(function (file) {
      return path.join(p, file);
  }).filter(function (file) {
      return fs.statSync(file).isFile();
  }).forEach(function (file) {
    body = fs.readFileSync(file, {encoding: 'utf-8'});
    if (/\.css$/.test(file)) {
      contentType = 'text/css';
    };
    if (/\.js$/.test(file)) {
      contentType = 'text/js';
    };
    
    s3 = new AWS.S3({ params: {Bucket: bucket}}, {
      Key: remote_folder + '/' + path.basename(file),
      Prefix: remote_folder
    });
      
    s3.putObject({
      Body: body,
      ContentType: contentType,
      Key: remote_folder + '/' +  path.basename(file)
    }, function(err, data) {
      if (err) {
        return console.log(err);
      }else{
        console.log( path.basename(file) + " ("+contentType+").....uploaded");
      }
    });  
    
  });
  
});
