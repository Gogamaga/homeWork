
//   Task #1  Version 1
var str = 'me-sed-gef-gdgs-rynr';
function edit(str){
  var arr = str.split(/\-/g,);
  for(var i = 1; i < arr.length; i++){
    var newstr = arr[i];
    var edidStr = newstr[0].toUpperCase() + newstr.slice(1);
    arr[i] = edidStr;
  }
  var str = arr.join('');
  return str;
};
// Task #1 Version 2
function edirString(str){
 var ind = 0;
  while(ind != -1){
    ind = str.indexOf('-');
    var strUper = str[ind + 1].toUpperCase();
    str = str.replace(str[ind + 1],strUper);
    str = str.replace('-', '');
  }
  return str;
}
console.log(edirString(str));
// Task #2
var obj = {};

function newObj(num){
  for(var i = 1; i <= num; i++){
    obj['key' + i]= 'value' + i;
    }
    return obj;
}
console.log(newObj(5));
