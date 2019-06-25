module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        // data: `@import "./src/lib/hotcss/px2rem.scss";`
        data: '@import "./src/assets/style/main.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8848/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api" // rewrite path
        }
      },
      "^/bj": {
        target: "http://localhost:8848/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/bj": "/bj" // rewrite path
        }
      },
      "^/server": {
        target: "http://192.168.0.119:8848/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/server": "/server" // rewrite path
        }
      }
    }
  }
};
