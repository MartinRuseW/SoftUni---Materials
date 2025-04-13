// function sort(numbers) {

//     numbers.sort((a, b) => b - a);

//     numbers.forEach((number) => {
//       console.log(number);
//     });
// }
//   sort([2, 1, 3]);
function solve(a, b, c) {
  
  if (a > c) {
    [a, c] = [c, a];
  }

  if (a > b) {
    [a, b] = [b, a];
  }

  if (b > c) {
    [b, c] = [c, b];
  }

  console.log(c);
  console.log(b);
  console.log(a);
}
solve(2,1,3)
  