# 靜心山寺官網與隱私權政策

純靜態網站，無 npm、遠端字型、追蹤或執行時 CDN 依賴。整個 html/ 目錄可部署到同一個靜態站點，保留相對路徑。

- index.html：官網，同頁支援英文與繁體中文。
- privacy.html：隱私權政策，同頁支援英文與繁體中文，可作為 Google Play 政策網址的頁面路徑。
- 兩頁右上角均提供 EN / 繁中 按鈕，切換時不跳頁、不重新載入。首次按瀏覽器語言選擇，中文使用繁中，其餘使用英文；可透過 ?lang=en 或 ?lang=zh 指定。網址保留選擇，前往另一頁時沿用語言，不使用 Cookie 或本機儲存。
- index-zh.html、privacy-zh.html 僅保留為舊連結的轉址入口，不再維護獨立語言正文。
- site.css、language.js、assets/：共用樣式、語言切換及本機素材。停用 JavaScript 時可閱讀預設英文正文。

## 名稱與素材

英文名稱 Quiet Temple: Wooden Fish；簡中與繁中名稱均使用 靜心山寺：木魚與念珠。
圖示複製自 Assets/SansaGame/Art/AppIcon/temple-icon-512.png。
temple-hall.jpg 源自 tmp/qa-2026-11-08/resident-look/device.png；
第二張現使用 temple-current.jpg，源自 2026-11-08 21:31（Asia/Shanghai）透過 ADB 對 R5CR80J1ZLX 當前遊戲畫面的擷取，原始 PNG 為 tmp/qa-2026-11-08/website-current/device.png。
擷取時前台為 com.sansa.offline/com.unity3d.player.UnityPlayerActivity；已目視確認佛壇近景與正面小僧，未移動角色或更改遊戲狀態。舊 temple-altar.jpg 保留作歷史素材，首頁不再引用。
兩張皆為 Android 開發版實機截圖，完整比例呈現，未重繪遊戲內容。
網站用 JPEG 為縮減下載體積的衍生檔，原圖保留原位。

## Online 定位與發布

使用者已確認最終目標為 Online 版本。官網不再使用離線、單機或無需多人連線的定位。
文案參考已保存的原版分析，圍繞共享寺院、訪客同場、禮佛同步和上香隊列；不代表本作已接通原版服務或已發布線上功能。
首頁標示線上版本開發中，真機截圖仍如實標示為 Android 開發版本。
privacy.html 已改為線上版本隱私政策草案，涵蓋訪客／連線識別、房間與互動狀態、連線技術資訊、可見範圍及資料刪除。
目前服務端尚未定案，不虛構供應商、保留期限、處理地區、帳號或雲端存檔現狀，也不承諾解除安裝可刪除服務端資料。
正式發布前，依實際服務端、SDK 及最終發行包定稿，補充發布者、直接聯絡方式、保留期限、適用年齡、處理地區及供應商；再設定正式生效日期。
網站本身仍不使用 Cookie 或 localStorage，語言透過 URL 傳遞；託管日誌須另依供應商確認。
目前沒有正式商店網址，首頁不放假下載按鈕。取得網址後再接入。
將網站部署到公開 HTTPS 後，才能在 Play Console 填寫實際的政策網址；本輪未部署。

## 本機預覽

在 html/ 下執行 python3 -m http.server 8765 --bind 127.0.0.1，
再開啟 http://127.0.0.1:8765/ 。也可直接用瀏覽器開啟 index.html。
