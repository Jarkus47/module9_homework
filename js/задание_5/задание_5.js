const btn = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');

btn.addEventListener('click', () => {
   const inputFisrt = +document.getElementById('input1').value;
   const inputSecond = +document.getElementById('input2').value;

   let check = document.getElementById('j-result');
   check.textContent = '';
   if (!(inputFisrt <= 10 && inputFisrt >= 1 && inputSecond > 10 && inputSecond < 1) ) {
      check.textContent = 'Номер страницы вне диапазона от 1 до 10';
      return;
   }
   else if (!(inputSecond <= 10 && inputSecond >= 1)) {
      check.textContent = 'Лимит вне диапазона от 1 до 10';
      return;
   }
   else if (!(inputFisrt <= 10 && inputFisrt >= 1 && inputSecond <= 10 && inputSecond >= 1)) {
      check.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
      return;
   } else {
      fetch(`https://picsum.photos/v2/list?page=${inputFisrt}&limit=${inputSecond}`)
         .then((response) => {
            return response.json()
         })
         .then(data => {
            let resultBlock = "";
            data.forEach((item) => {
               let img = `<div class="card"> <img class="card-image" src="${item.download_url}" alt=""> <p>${item.author}</p> </div>`;
               resultBlock += img;
            })
            check.innerHTML = resultBlock
         })
   }
});