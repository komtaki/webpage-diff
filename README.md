# Web ページの見た目の差分抽出をするプログラム

## 準備

このリポジトリをクローンします。

```
git clone git@github.com:komtaki/webpage-diff.git
```

## テスト実行

```sh
docker compose run --rm app
```

HTMLレポートのサーブ

現状localで実行する。

http://localhost:9323

```sh
## local
npx playwright show-report
## in container
docker compose run --rm app npm run report
```