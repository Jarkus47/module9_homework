const parser = new DOMParser();
const xmlString = `
<list>
    <student>
      <name lang="en">
         <first>Ivan</first>
         <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
   </student>
   <student>
      <name lang="ru">
         <first>Петр</first>
         <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
   </student>
  </list> 
   `;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const list = xmlDOM.querySelectorAll('student');

const listStudents = []
for (const student of list) {
   const name = student.querySelector('name').querySelector('first').textContent;
   const surname = student.querySelector('name').querySelector('second').textContent;
   const lang = student.querySelector('name').getAttribute('lang');
   const age = Number(student.querySelector('age').textContent);
   const prof = student.querySelector('prof').textContent;
   listStudents.push({
      'name': `${name} ${surname}`,
      'age': age,
      'prof': prof,
      'lang': lang
   })
}
console.log(listStudents);