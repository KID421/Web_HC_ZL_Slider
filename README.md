# Web_HC_ZL_Slider
網頁 赫綵中壢 輪播系統

# 範例
https://kid421.github.io/Web_HC_ZL_Slider/

# 使用說明

## CDN

```
    <link rel="stylesheet" href="https://kid421.github.io/Web_HC_ZL_Slider/style.css">
    
    <script src="https://kid421.github.io/Web_HC_ZL_Slider/script.js"></script>
```

## 架構

```
    <!-- data-slider-duration 自動播放時間 -->
    <div id="kid-slider" data-slider-duration="3000">

        <!-- 輪播圖項目：根據需求複製貼上 active 只有一組 -->
        <div class="kid-item kid-active">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <div class="kid-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <div class="kid-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <!-- 大顆按扭區塊 -->
        <div id="kid-prev"></div>
        <div id="kid-next"></div>

        <!-- 小顆按扭區塊：根據需求複製貼上 active 只有一組 -->
        <!-- data-slider-item 隨數量增加 -->
        <div id="kid-buttons">
            <div class="kid-button kid-button-active" data-slider-item="1"></div>
            <div class="kid-button" data-slider-item="2"></div>
            <div class="kid-button" data-slider-item="3"></div>
        </div>
    </div>
```