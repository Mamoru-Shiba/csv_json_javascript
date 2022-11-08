

// console.log('hello');
let fileInput = document.getElementById('upfile');
let message = document.getElementById('message');
let fileReader = new FileReader();

function JsonToCsvConvert() { }
function CsvToJsonConvert() { }
function ConvertCsvArray() { }




// const main = function () {
//   FileSelect();
//   console.log('test');
// }();


// イベント: ファイル変更時
fileInput.onchange = () => {
  message.innerHTML = '読み込み中...';
  // jsonファイルとcsvファイルを選択する

  let file = fileInput.files[0];
  fileReader.readAsText(file, 'Shift_JIS');
};

// イベント: ファイル読み込み時

