const names = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(names){
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
}
 return names;
}

const number = 8

function tailsNeverFails(){
  return Math.random() >= 0.5;
}










// // const number = 8
//
// // function tailsNeverFails(){
//   return Math.random() >= 0.5;
// }
//
// while (number >= 0.5) {
//   console.log(--number);
// }
//
// while (tailsNeverFails()) {
//   console.log('You got ${number} tails in a row!');
// }
