var prev = document.getElementById("kid-prev");             // 上一張按鈕
var next = document.getElementById("kid-next");             // 下一張按鈕

var items = document.getElementsByClassName("kid-item");    // 所有項目

var index = 0;                                              // 編號

// 按鈕函式：下一張
function btnNext() {
    index++;                                    // 編號遞增

    if (index == items.length) index = 0;       // 如果編號超出範圍 編號歸零
}
// 按鈕函式：上一張
function btnPrev() {
    index--;                                    // 編號遞減

    if (index == -1) index = items.length - 1;  // 如果編號超出範圍 編號等於 長度-1
}

next.onclick = btnNext;                         // 點擊函式
prev.onclick = btnPrev;                         // 點擊函式