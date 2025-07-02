let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 1;
let end = false;

document.getElementById('print').addEventListener('click', hantei);

function hantei() {
  if (end) {
    document.getElementById('result').textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています';
    return;
  }

  let yoso = Number(document.getElementById('yosou').value);

  document.getElementById('kaisu').textContent = kaisu;
  document.getElementById('answer').textContent = yoso;

  let result = '';

  if (kaisu <= 3) {
    if (yoso < kotae) {
      result = 'まちがい．答えはもっと大きいですよ';
    } else if (yoso > kotae) {
      result = 'まちがい．答えはもっと小さいですよ';
    } else {
      result = '正解です．おめでとう!';
      end = true;
    }
  }

  if (kaisu === 3 && yoso !== kotae) {
    result = '答えは' + kotae + 'でした．残念でした';
    end = true;
  }

  document.getElementById('result').textContent = result;

  kaisu++;
}

  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール