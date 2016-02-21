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

## Gulp Tasks
* `gulp build`
* `gulp` or `gulp default` : BrowserSync でファイルの監視& `gulp build` を実行。
