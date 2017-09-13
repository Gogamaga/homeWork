// TAsk #1
// function minValue(min, max) {
//   var inf = Number.POSITIVE_INFINITY;
//   for(var i = 0; i < arguments.length; i++){
//     if (arguments[i]< inf) {
//       inf = arguments[i];
//     }
//   }
//   return inf;
// }
// var a = minValue(1,3);
// console.log(a);

//Task #2
// var arr = [1,3,6,9,12,15,45]
// function range(min, max, arr){
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var arrValue = arr[i];
//     if (arrValue >= min && arrValue <= max) {
//       newArr.push(arrValue);
//     }
//   }
//   return newArr;
// };
// var a = range(1,20,arr);
// console.log(a);

//   # TAsk #3
function power(x, n) {
  var pow = x;
  for (var i = 0; i < n -1; i++) {
     pow *= x;
    }
    console.log(pow);
}
power(3,3);
console.log(Math.pow(3,3));
