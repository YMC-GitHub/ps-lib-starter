// caculate num when resolution !=72
function str2num(str){
  //return str.match(/\d+/)*1;
  //return Number(str.match(/\d+/));
  //return parseInt(str.match(/\d+/));
  return parseFloat(str.match(/\d+/));
}
function num2str(num){
  //return ""+num;
  //return String(num);
  return num.toString()
}
function getUnitValueNum(str){
  return str.match(/\d+/);
}
function getUnitValueStr(str){
  return str.replace(" ","").match(/\D+/);
}
function caculateUnitValueNum(size){
  var defaultResolution=72;
  var newResolution=config.resolution;
  if(newResolution>72){
    return (1.00*size/(newResolution/defaultResolution));
  }else{
    return size;
  }
}
function caculateUnitValue(str){
  var unit=getUnitValueStr(str);
  var val=getUnitValueNum(str);
  val=caculateUnitValueNum(val);
  return num2str(val)+unit;
}
function restoreUnitValue(str){
  var unit=getUnitValueStr(str);
  var val=getUnitValueNum(str);
  var defaultResolution=72;
  var newResolution=config.resolution;
  if(newResolution>72){
    val= (val*(newResolution/defaultResolution));
  }
  return num2str(val)+unit;
}


function htmlUnicodeChar2JsUnicodeChar(str){
  /*
  var htmlChar10="&#";
  var htmlChar16="&#x";
  var js2BitChar16="\\x";
  var js4BitChar16="\\u";
  */
  return str.replace(/&#x/,"\u").replace(/;$/,"");
}
