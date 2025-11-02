const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); //Sassコンパイル
const plumber = require("gulp-plumber"); //エラー時の強制終了を防止
const notify = require("gulp-notify"); //エラー発生時にデスクトップ通知する
const sassGlob = require("gulp-sass-glob"); //@importの記述を簡潔にする
const browserSync = require("browser-sync"); //ブラウザ反映
const postcss = require("gulp-postcss"); //autoprefixerとセット
const autoprefixer = require("autoprefixer"); //ベンダープレフィックス付与
const postcssCustomMedia = require("postcss-custom-media");
const postcssImport = require("postcss-import");
const imagemin = require("gulp-imagemin"); //画像を自動圧縮する
const optipng = require("imagemin-optipng"); //pngの圧縮
const mozjpeg = require("imagemin-mozjpeg"); //jpegの圧縮
const ejs = require("gulp-ejs"); //htmlに変換
const rename = require("gulp-rename"); //.ejsの拡張子を変更
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");

// scssのコンパイル
gulp.task("sass", function () {
  return gulp
    .src("./src/**/*.scss", gulp.task("sass"))
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })) //エラーチェック
    .pipe(sassGlob()) //importの読み込みを簡潔にする
    .pipe(
      sass({
        outputStyle: "expanded", //expanded, nested, campact, compressedから選択
      })
    )
    .pipe(
      postcss([
        postcssCustomMedia(),
        autoprefixer({
          // ☆IEは11以上、Androidは5以上
          // その他は最新2バージョンで必要なベンダープレフィックスを付与する
          overrideBrowserslist: ["last 2 versions", "ie >= 11", "Android >= 5"],
          cascade: false,
        }),
        postcssImport({
          path: ["node_modules"],
        }),
      ])
    )
    .pipe(gulp.dest("./build/")); //コンパイル後の出力先
});

// 保存時のリロード
gulp.task("browser-sync", function (done) {
  browserSync.init({
    //ローカル開発
    server: {
      baseDir: "./build/",
      index: "index.html",
      directory: false,
    },
  });
  done();
});
gulp.task("bs-reload", function (done) {
  browserSync.reload();
  done();
});

gulp.task("ejs", (done) => {
  gulp
    .src(["src/**/*.ejs", "!" + "src/**/_*.ejs"])
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })) //エラーチェック
    .pipe(ejs())
    .pipe(rename({ extname: ".html" })) //拡張子をhtmlに
    .pipe(gulp.dest("./build/")); //出力先
  done();
});

gulp.task("js", function (done) {
  return webpackStream(webpackConfig, webpack).pipe(gulp.dest("./build"));
});

gulp.task("copy", function (done) {
  gulp
    .src("./src/**/*.{png,jpg,gif,svg,eot,woff,woff2,ico}", {
      base: "src",
    })
    .pipe(gulp.dest("./build/"));
  done();
});

// 監視
gulp.task("watch", function (done) {
  gulp.watch("./src/**/*.scss", gulp.task("sass")); //sassが更新されたらgulp sassを実行
  gulp.watch("./src/**/*.scss", gulp.task("bs-reload")); //sassが更新されたらbs-reloadを実行
  gulp.watch("./src/**/*.ejs", gulp.task("ejs")); //ejsが更新されたらgulp-ejsを実行
  gulp.watch("./src/**/*.ejs", gulp.task("bs-reload")); //ejsが更新されたらbs-reloadを実行
  gulp.watch("./src/**/*.js", gulp.task("js")); //jsが更新されたらgulp-jsを実行
  gulp.watch("./src/**/*.js", gulp.task("bs-reload")); //jsが更新されたらbs-reloadを実行
  gulp.watch("./src/**/*.{mp3,png,jpg,gif,svg,eot,woff,woff2,ico}", gulp.task("copy")); //assetが更新されたらgulp-copyを実行
  gulp.watch("./src/**/*.{mp3,png,jpg,gif,svg,eot,woff,woff2,ico}", gulp.task("bs-reload")); //assetが更新されたらbs-reloadを実行
});

// default
gulp.task("dev", gulp.series(gulp.parallel("sass", "ejs", "copy", "js", "browser-sync", "watch")));
gulp.task("build", gulp.series(gulp.parallel("sass", "ejs", "js", "copy")));

//圧縮率の定義
var imageminOption = [
  optipng({ optimizationLevel: 5 }),
  mozjpeg({ quality: 85 }),
  imagemin.gifsicle({
    interlaced: false,
    optimizationLevel: 1,
    colors: 256,
  }),
  imagemin.mozjpeg(),
  imagemin.optipng(),
  imagemin.svgo(),
];

// 画像の圧縮
// $ gulp imageminで./src/img/base/フォルダ内の画像を圧縮し./src/img/フォルダへ
// .gifが入っているとエラーが出る
gulp.task("imagemin", function () {
  return gulp.src("./src/**/*.+(png|jpg|gif|svg)").pipe(imagemin(imageminOption)).pipe(gulp.dest("./build/"));
});
