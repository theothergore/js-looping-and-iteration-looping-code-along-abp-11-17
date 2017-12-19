const names = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(names){
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
}
 return names;
}


function tailsNeverFails(){
  let number = 0;
    while (Math.random() >= 0.5){
      number++;
    }
    console.log(`You got ${number} in a row`);
    console.log("This is working...")
}






//
// while (number >= 0.5) {
//   console.log("You got 2 in a row!");
// }

// function tailsNeverFails(){
//     while (Math.random() >= 0.5){
//       number += 1
//       console.log("You got ${number++} in a row!")
//     }
//     console.log("This is working...")
// }


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
