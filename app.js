let name = 'Max';

if (name === 'Max') {
  let hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);

}

function greet() {
  let age = 30;
  let name = 'Manuel';
  console.log(name, age, hobbies); // error hobbies is not accessible because of "let" 
}

console.log(name, hobbies); // error hobbies is not accessible because of "let" 

greet();