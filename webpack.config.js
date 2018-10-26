var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader:"style-loader"}, // creates style nodes from JS strings         
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, // translates CSS into CommonJS
                    {loader:"postcss-loader"},
                    {loader:"sass-loader"} // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
};