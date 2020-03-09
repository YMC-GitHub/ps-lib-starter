#include utils.jsx
//doc
var config = {
  size:{w:"500px",h:"500px"},
  //resolution:300 //72
  resolution:72
}
//bg
var shape={
  pos:{x:0,y:0},
  //size:{w:500,h:500}
  size:{w:100,h:100}
}
var innerShadowOpt={
  //阻塞
  choke:16,//%
  //偏移
  distance:0,//px
  //透明度
  opacity:100,//%
  // 大小
  size:shape.size.w*(50/1000)//px
}
//txt
/*
var txtOpts={
  pos:{x:"0 px",y:"0 px"},
  area:{w:"100 px",h:"100 px"},
  size:"80 px",
  font:"FontAwesome",
  content:"\uf006",
}
*/
var txtOpts={
  pos:{x:"0 px",y:"0 px"},
  //fix:use caculateUnitValue to fix txt area size when resolution>72
  area:{w:caculateUnitValue("100 px"),h:caculateUnitValue("100 px")},
  //fix:use caculateUnitValue to fix txt font size when resolution>72
  size:caculateUnitValue("80 px"),
  font:"FontAwesome",
  content:"\uf006",//
}
//"&#xf26e;".replace("&#x","\u")

// save
var basePath = "D:\\code-store\\js-for-ps\\hello-ps-starter";
var SCREENSHOT_PATH=basePath+"\\screenshot"
var DIST_PATH=basePath+"\\dist"
var FILE_NAME="helloworld";
var FILE="";
