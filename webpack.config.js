const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
            import:'./src/main.js'
    },
    
    plugins: [
            /*new webpack.ProgressPlugin(),*/
            new HtmlWebpackPlugin({                 
                title:"BattleShip App" 
            }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module:{
        rules: [
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
            }, 
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },   
        ],
    },
};