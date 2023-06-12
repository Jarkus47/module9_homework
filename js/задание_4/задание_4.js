const btn = document.querySelector('.j-btn-request');

btn.addEventListener('click', () => {
   const inputFisrt = +document.getElementById('input1').value;
   const inputSecond = +document.getElementById('input2').value;

   let s = document.getElementById('j-result');
   s.textContent = '';
   if (!(inputFisrt >= 100 && inputFisrt <= 300 && inputSecond >= 100 && inputSecond <= 300)) {
      s.textContent = 'одно из чисел вне диапазона от 100 до 300';
      return;
   }
   fetch(`https://picsum.photos/${inputFisrt}/${inputSecond}`)
      .then((response) => {
         document.getElementById('result').src = response.url;
      });

});