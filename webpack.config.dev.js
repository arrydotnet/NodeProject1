import  path from 'path';
 
export default  {
  debug:true,
  devtool: 'inline-source-map',
  noINfo: false,
  entry: [
    path.resolve(__dirname,'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname,'src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: ['style','css']
      }
    ]
  }
};