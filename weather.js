
// 課題3-2 のプログラムはこの関数の中に記述すること
//function print(data) {
    //console.log("都市: " + data.name);
    //console.log("国: " + data.sys.country);
  
    //let weather = data.weather[0];
    //console.log("天気: " + weather.main);
    //console.log("天気の詳細: " + weather.description);
  
    //console.log("現在の気温: " + data.main.temp + "℃");
    //console.log("体感温度: " + data.main.feels_like + "℃");
    //console.log("最低気温: " + data.main.temp_min + "℃");
    //console.log("最高気温: " + data.main.temp_max + "℃");
  
    //console.log("湿度: " + data.main.humidity + "%");
    //console.log("気圧: " + data.main.pressure + "hPa");
  
    //console.log("風速: " + data.wind.speed + "m/s");
    //console.log("風向: " + data.wind.deg + "°");
    //console.log("風の突風: " + data.wind.gust + "m/s");
  
    //console.log("雲の割合: " + data.clouds.all + "%");
//}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const oldResult = document.getElementById("result");
  if (oldResult) {
    oldResult.remove();  // 結果ごと削除する
  }
  const resultDiv = document.createElement("div");
  resultDiv.id = "result";

  const ul = document.createElement("ul");

  const items = [
    { label: "経度", value: data.coord.lon },
    { label: "緯度", value: data.coord.lat },
    { label: "最低気温", value: data.main.temp_min + "℃" },
    { label: "最高気温", value: data.main.temp_max + "℃" },
    { label: "湿度", value: data.main.humidity + "%" },
    { label: "風速", value: data.wind.speed + "m/s" },
    { label: "風向", value: data.wind.deg + "°" },
    { label: "都市名", value: data.name }
  ];

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.label}: ${item.value}`;
    ul.appendChild(li);
  });

  resultDiv.appendChild(ul);
  document.body.appendChild(resultDiv);
}


document.addEventListener('DOMContentLoaded', () => {
  const citySelector = document.querySelector('#citySelector');

  const cities = [
    { id: "360630", name: "カイロ" },
    { id: "524901", name: "モスクア" },
    { id: "993800", name: "ヨハネスブルク" },
    { id: "1816670", name: "北京" },
    { id: "1850147", name: "東京" },
    { id: "1880252", name: "シンガポール" },
    { id: "2147714", name: "シドニー" },
    { id: "2643743", name: "ロンドン" },
    { id: "2968815", name: "パリ" },
    { id: "3451189", name: "リオネジャネイロ" },
    { id: "5128581", name: "ニューヨーク" },
    { id: "5368361", name: "ロサンゼルス" }
  ];

  cities.forEach(city => {
    const opt = document.createElement('option');
    opt.value = city.id;
    opt.textContent = city.name;
    citySelector.appendChild(opt);
  });

  // 課題6-1 のイベントハンドラ登録処理
  let b = document.querySelector('#sendRequest');
  b.addEventListener('click', sendRequest);
});

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let cityId = document.querySelector('#citySelector').value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + cityId + '.json';

  // 通信開始
  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  console.log(data);
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}