
import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import webpack from 'webpack';


var port= 3000;
var app = express();
const compiler =webpack(config);

app.use(require('../node_modules/webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath: config.output.publicPath,
}) );

app.get('/',function (req, res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

//app.listen(port,() => console.log('Example app listening on port 3000!'));
app.listen(port,function(err){
if(err){
    console.log(err);
}
else{
    open('http://localhost:'+port);
    console.log('Example app listening on port {port}!')
}
});
