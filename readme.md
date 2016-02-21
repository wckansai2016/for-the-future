# Theme Development Environment Sample.


[![Build Status](https://travis-ci.org/wckansai2016/theme-env-sample.svg?branch=master)](https://travis-ci.org/wckansai2016/theme-env-sample)

テーマの開発環境のサンプルです。gulp を使って CSS / JS をビルドしたり、 [Travis CI](https://travis-ci.org/) を使って、それらの自動ビルド & コミットを実行してます。

## Directories and Files

* `bin` : travis 等から実行されるファイル等。
* `gulp`: gulp の設定。
* `gulpconfig.js`: gulp の設定を上書きします。`gulpconfig.js.sample` を参照のこと。
* `gulpfile.babel.js` ただの gulpfile です。
* `src` css/js 等のビルド前のファイル
    * `styles/style.scss`: `style.css` にビルドされます。また、`styles` 内のSass/SCSSファイルは、テーマのルートへビルドされます。
    * `scripts/main.js`: `bundle.js` へビルドされます。

## Get Started

Node.js 5 以上 で動作します。 4系の人はアップデートしてください。

```
$ npm install
$ vi gulpconfig.js
$ gulp
```
Open [localhost:3000](http://localhost:3000) !


## Gulp Tasks
* `gulp` or `gulp default` : BrowserSync でファイルの監視& `gulp build` を実行。
* `gulp build` : CSS / JS のビルドを実行。
* `gulp dist` : `./dist` に配布用のテーマを作成。

## Gulp Configuration

BrowserSync で ローカルサーバーが立ち上がりますが、node.js のサーバーでは、PHP が動作しないため、Xampp 、MAMP 、VCCW 、ビルトインサーバー等への Proxy の設定が必要です。
`gulpconfig.js.sample` を参考に、`gulpconfig.js` を変更してください。


## Build Settings.

### CSS

基本は、gulp-sass していますが、[gulp-sass-bulk-import](https://github.com/mathisonian/gulp-sass-bulk-import), が突っ込んであるので、`sass-globbing` 的なことが出来ます。

また、postcss で [autoprefixer](https://github.com/postcss/autoprefixer) と、[postcss-import](https://github.com/postcss/postcss-import) を突っ込んであります。

### JS

[Browserify](http://browserify.org/) でJSの依存管理、コンパイルなどを実行してます。(concatの順番とか管理するのつらい)
また、jQuery と Underscore.js は WordPress で出力される場合があるので、グローバル変数のものを使用します。[browserify-shim](https://github.com/thlorenz/browserify-shim) 使ってます。

ES6を使うようにしていますが、せいぜい import 周りを覚えれば普通の JS です。

main.js をコンパイルするようにしています。なので、これに import するなり、記述するなりしてください。

## Auto Build Theme.

master ブランチへ push すると、travis-ci が `gulp dist` を実行し、配布用のテーマを dist ブランチへコミットします。

テストは、`style.css` / `bundle.js` が存在するか、*.php のファイルに文法エラーが無いかを確認してます。

[最新の配布用テーマのダウンロード](https://github.com/wckansai2016/theme-env-sample/archive/dist.zip)