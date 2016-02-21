# Theme Development Environment Sample.

テーマの開発環境(gulp等)のサンプルです。

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


## Auto Build Theme.

master ブランチへ push すると、travis-ci が `gulp dist` を実行し、配布用のテーマを dist ブランチへコミットします。

[最新の配布用テーマのダウンロード](https://github.com/wckansai2016/theme-env-sample/archive/dist.zip)