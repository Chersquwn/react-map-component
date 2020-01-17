const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  DefinePlugin,
  HotModuleReplacementPlugin
} = require('webpack')

const DEV_ENV = process.env.NODE_ENV === 'development'

let webpackConfig = {
  entry: './index.tsx',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../examples/dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ],
        exclude: /node_modules/
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     DEV_ENV
      //       ? 'style-loader'
      //       : {
      //           loader: MiniCssExtractPlugin.loader,
      //           options: {
      //             publicPath: 'css'
      //           }
      //         },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: '[local]--[hash:base64:5]'
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         implementation: require('sass')
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /.(png|jpe?g|gif|svg|webp)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 8 * 1024,
      //     name: DEV_ENV ? 'imgs/[name].[ext]' : 'imgs/[name].[hash:5].[ext]'
      //   }
      // }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // alias: {
    //   '@': path.resolve(__dirname, '../src')
    // },
    symlinks: false
  },

  context: path.resolve(__dirname, '../example'),

  stats: 'errors-only',

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

if (DEV_ENV) {
  webpackConfig = merge(webpackConfig, {
    mode: 'development',

    devServer: {
      contentBase: path.resolve(__dirname, '../dist'),
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      https: false,
      port: 3001,
      stats: 'errors-only',
      useLocalIp: true,
      open: true
    },

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },

    devtool: 'inline-source-map',

    plugins: [new HotModuleReplacementPlugin()]
  })
}

module.exports = webpackConfig
