# Web ページの見た目の差分抽出をするプログラム

## 準備

このリポジトリをクローンします。

```
git clone git@github.com:komtaki/webpage-diff.git
```

### 1. imageMagic をinstall

差分抽出の処理をするために [ImageMagick](https://imagemagick.org/) を使用する

```
brew install imagemagick
```

### 2. imageを実行

```
docker compose run app
```

## 差分抽出処理の実行

### 2. コマンド実行

```
./diff
```
