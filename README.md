# Scoreboard

簡單的壁球計分板，使用 [Preact](https://preactjs.com/) 及 [Vite](https://vitejs.dev/) 製作。

## Clone

如果想修改，可以先 clone 下來，然後把 `package.json` 的東西下載下來：

```bash
git clone https://github.com/0500920-0/scoreboard.git
cd scoreboard
npm i
```

> 我不太確定步驟有沒有錯就是了，我很少在用 Git 跟 GitHub。

## 可以使用的指令

如 `package.json` 所述，可用的 script 有以下三個：

### `npm run dev`

執行開發版的程式，在瀏覽器中輸入 [http://localhost:3000](http://localhost:3000) 便可以使用，檔案更新時會自動重新載入。
如果須要在同一網路下其他裝置（尤其手機）測試網頁，建議直接用 `npx vite --host` 指令。

### `npm run build`

把檔案 build 在 `./docs/` 中，為了方便讓 GitHub host 出來。
