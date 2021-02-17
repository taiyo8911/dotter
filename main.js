// canvasを用意
var canvas = document.getElementById("canvas1"); //キャンバスのオブジェクトを取得する。
var context = canvas.getContext("2d"); //キャンバスのコンテキストを取得する。

//タイマーを格納する変数の宣言
var timer1;
// スタートボタン
startButton = document.getElementById('start');
// ストップボタン
stopButton = document.getElementById('stop');
// リセットボタン
resetButton = document.getElementById('reset');

// 塗りつぶし
function fill() {
    var colors = ["red", "yellow", "green", "blue", "pink", "brown", "black", "orange"];
    var array = [0, 100, 200, 300, 400];
    var x = (array[Math.floor(Math.random() * array.length)]);
    var y = (array[Math.floor(Math.random() * array.length)]);
    context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    context.fillRect(x, y, 100, 100);
}

// ボタンが押された際の動作
startButton.onclick = function () {
    timer1 = setInterval(fill, 300);
};

stopButton.onclick = function () {
    clearInterval(timer1);
};

resetButton.onclick = function () {
    location.reload();
};

// downloadリンククリック時
document.getElementById('download-link').addEventListener('click', (e) => {
    const a = e.target;
    a.href = canvas.toDataURL(); // Canvasからdata:URLを取得
    a.download = new Date().getTime() + '.png'; // ダウンロードファイル名はタイムスタンプに設定
});
