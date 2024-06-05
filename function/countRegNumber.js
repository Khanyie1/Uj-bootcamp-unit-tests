function countRegNumber(regList){
    var list = regList.split(","); // declare a variable
  return list.length;
    //return list;
}
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
console.log(regCount);