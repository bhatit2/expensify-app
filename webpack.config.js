const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
    entry : "./src/app.js",
    output : {
        path : path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module : {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/
        },
        {
            test : /\.s?css$/,
            use : CSSExtract.extract({
                use : [
                    'css-loader',
                    'sass-loader'
                ]
            })
        }]
    },
    plugins : [
        CSSExtract
    ],
    devtool : env ? 'source-map' : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname, 'public'),
        historyApiFallback : true
    }
}
}