function xo(str){
if(str.split('x').length === str.split('o').length){
  console.log(str.length);
    return true;}else{
  return false;}
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
