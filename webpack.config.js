
module.exports = {
    entry : ['babel-polyfill', './src/index.js'],
    output : {
        filename : 'bundle.js',
    },
    module: {
        rules : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loaders : ['babel-loader']
            }
        ]
    },
    watch : true
}