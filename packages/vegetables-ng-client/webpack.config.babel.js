import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

export default {
    target: 'web',
    entry: [
        './src/index'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'packages'),
            'node_modules'
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' }
        ])
    ],
    devtool: 'source-map',
    stats: true
};