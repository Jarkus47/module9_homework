function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
 
    xhr.onload = function () {
       if (xhr.status != 200) {
          console.log('Статус ответа: ', xhr.status);
       } else {
          const result = JSON.parse(xhr.response);
          if (callback) {
             callback(result);
          }
       }
    };
 
    xhr.onerror = function () {
       console.log('Ошибка! Статус ответа: ', xhr.status);
    };
 
    xhr.send();
 };
 
 const resultNode = document.querySelector('.j-result');
 const btnNode = document.querySelector('.j-btn-request');
 
 const input = document.querySelector('.input')
 
 function displayResult(apiData) {
    let pic = '';
    apiData.forEach(item => {
       let resultBlock = `<div class="result"> <img src="${item.download_url}" class="card-image" /> <p>${item.author}</p> </div>`;
       pic = pic + resultBlock;
    });
    resultNode.innerHTML = pic;
 }
 
 btnNode.addEventListener('click', () => {
    if (input.value >= 1 && input.value <= 10) {
       useRequest(`https://picsum.photos/v2/list?limit=${input.value}`, displayResult);
    } else {
       resultNode.innerHTML = 'число вне диапазона от 1 до 10'
    }
 })