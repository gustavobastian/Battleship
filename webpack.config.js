const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const lang = "EN";


module.exports = {
    mode: 'development',
    entry: {        
        ui:{
            import:'./src/uI.js',
        },
        gameboard:{
            import:'./src/gameboard.js',
        },
        ship:{
            import:'./src/ship.js',
        }
        ,
        main:{
            import:'./src/main.js',
        }
    },
    
    plugins: [
            /*new webpack.ProgressPlugin(),*/            
            new HtmlWebpackPlugin({                 
                title:"BattleShip App",
                lang: lang,
                template: 'src/index.html',

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