//宣告變數做為大包、小包的價格
var cakemaney1;
//宣告變數作為單顆數量及價位
var cakemaney2;
//宣告變數做為大包
var big_bag;
//宣告變數作為小包
var packet;
//宣告變數作為單顆數量
var total;
var price = 50;
var price2 = 30;
var price3 = 10;
big_bag ="大包";
packet = "小包";
total = "1個";
//利用方法將取得文本ID變數
var el  = document.getElementById('cost1');
var e2  = document.getElementById('cost2');
var e3  = document.getElementById('cost3');
var e4  = document.getElementById('cost4');
//設計好cakemaney1取得大包小包的價格
cakemaney1=big_bag+"$"+price+","+ packet+"$"+price2;
//設計好cakemaney2取得大包小包的價格
cakemaney2 =total+"$"+price3;
//將設定好的變數指派送回去
el.textContent = cakemaney1;
e2.textContent = cakemaney1;
e3.textContent = cakemaney2;
e4.textContent = cakemaney2;
