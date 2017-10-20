import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    entry: {
        bundle: './src/app.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' }
        ])
    ]
};