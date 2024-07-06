const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // Arquivo de entrada do seu aplicativo
    output: {
        path: path.resolve(__dirname, 'dist'), // Diretório de saída para os arquivos compilados
        filename: 'bundle.js' // Nome do arquivo de saída
    },
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify") // Configuração para resolver 'stream' usando stream-browserify
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Utilizando babel para transpilar JavaScript
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser', // Configuração para resolver 'process' usando process/browser
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Diretório base para o servidor de desenvolvimento
        compress: true, // Habilita a compressão gzip
        port: 9000 // Porta para o servidor de desenvolvimento
    }
};
