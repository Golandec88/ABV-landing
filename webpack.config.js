const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const StaticI18nHtmlPlugin = require("webpack-static-i18n-plugin");
const WatchExternalFilesPlugin = require("webpack-watch-files-plugin").default;
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { htmlWebpackPluginTemplateCustomizer }  = require('template-ejs-loader')
const WebpackBar = require("webpackbar");

const PATHS = {
  dist: path.resolve(__dirname, "dist"),
  pages: path.resolve(__dirname, "./src/pages/"),
  locales: path.resolve(__dirname, "locales"),
  styles: path.resolve(__dirname, "./src/styles"),
  assets: path.resolve(__dirname, "./src/assets")
}

const DEV_SERVER_CONFIG = {
  open: false,
  host: "localhost",
  port: 3000,
  static: {
    directory: PATHS.dist,
  }
};

const GLOBAL_PLUGINS = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "assets/style.css"
  }),
  new WebpackBar(),
  new OptimizeCSSAssetsPlugin({
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
  })
];

const RULES = [
  {
    test: /\.ejs$/i,
    include: PATHS.pages,
    use: ["html-loader", "template-ejs-loader"],
  },
  {
    test: /\.((s*)(a|c)ss)$/,
    include: PATHS.styles,
    use: [MiniCssExtractPlugin.loader, {
      loader: "css-loader",
      options: {
        importLoaders: 1,
        sourceMap: true
      }
    },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
  },
  {
    test: /\.(jpe?g|png|gif|svg|ico?)(\?v=\d+\.\d+\.\d+)?$/i,
    type: "asset/resource"
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',
  },
];

class Webpack {
  pages = [];
  plugins = [];
  config = {};
  locales = [];
  defaultLanguage = "ru";
  supportedLanguages = [];
  additionalWatcherFolders = [];

  constructor() {
    this.isProduction = process.env.NODE_ENV === "production";

    this.initLocales();
    this.initPages();
    this.initPlugins();
    this.initConfig();
    this.initMode();
  }

  initMode() {
    if (this.isProduction) {
      this.config.mode = "production";
    } else {
      this.config.mode = "development";
    }
  }
  initPages() {
    const files = fs.readdirSync(PATHS.pages);

    this.supportedLanguages
        .map(language => files.map(page => {
          let outputPath = ""

          if(language !== this.defaultLanguage) outputPath = language + "/"

          const config = {
            template: htmlWebpackPluginTemplateCustomizer({
              templatePath: path.resolve(PATHS.pages, page),
              templateEjsLoaderOption: {
                data: {
                  language
                }
              }
            }),
            filename: outputPath + page.split(".")[0] + ".html",
          }

          return new HtmlWebpackPlugin(config)
        }))
        .forEach(parent => parent.forEach(child => this.pages.push(child)))
  }
  initLocales() {
    const files = fs.readdirSync(PATHS.locales);

    if(files.length < 1) {
      console.error("Languages not found! You may need to download them using the \"npm run locales:get\" command.");
      return;
    }

    this.supportedLanguages = files.map(item => item.split(".")[0])
    this.additionalWatcherFolders.push(path.resolve(PATHS.locales, "*.json"))

    const config = {
      locale: this.defaultLanguage,
      locales: this.supportedLanguages,
      outputDefault: "__file__",
      outputOther: "__lng__/__file__",
      localesPath: PATHS.locales,
      files: "*.html",
    }

    const i18n = new StaticI18nHtmlPlugin(config)

    this.plugins.push(i18n)
  }
  initPlugins() {
    const additionalWatcher = new WatchExternalFilesPlugin({
      files: this.additionalWatcherFolders
    })

    this.plugins.push(...this.pages, ...GLOBAL_PLUGINS, additionalWatcher);
  }
  initConfig() {
    this.config = {
      entry: "./src/index.js",
      output: {
        path: PATHS.dist,
        filename: "index.js",
        assetModuleFilename: file => {
          const arr = file.filename.split(".");
          const ext = arr[arr.length - 1];

          if(ext === "js") return "assets/[name][ext]"; // Crunch for build:prod
          return "assets/[name].[contenthash][ext]";
        }
      },
      stats: "errors-only",
      devtool: "source-map",
      devServer: DEV_SERVER_CONFIG,
      plugins: this.plugins,
      module: {
        rules: RULES,
      }
    }
  }
}

module.exports = new Webpack().config
