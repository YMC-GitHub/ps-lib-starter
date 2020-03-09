#target photoshop

#include config.jsx
/*
// 存储旧的状态
var startRulerUnits = app.preferences.rulerUnits;
var startTypeUnits = app.preferences.typeUnits;
var startDisplayDialogs = app.displayDialogs;

// 设置新的状态
//我们使用像素来作为标尺和文档中各个对象的计量单位
//当然也可以设置其他计量单位，例如厘米，英寸等
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;
*/
/*
//repacle with config.jsx
var config = {
  size:{w:"500px",h:"500px"},
  resolution:72 //72
}
*/
// do sth. here
//...
// 创建文档
var newDoc;
// 文档它的宽高
var width = UnitValue(config.size.w);
var height = UnitValue(config.size.h);
// 文档它的分辨率。
var resolution = config.resolution;
// 文档它的名字
var docName = "a simpe icon with fontawsome";
// 文档的颜色模式
var mode = NewDocumentMode.RGB;
// 文档的默认背景填充颜色
var initialFill = DocumentFill.TRANSPARENT;
// 文档的像素长宽比：一粒像素的长和宽的比例
var pixelAspectRatio = 1;
newDoc = app.documents.add(width, height, resolution, docName, mode, initialFill, pixelAspectRatio);

/*
// 恢复旧的状态
app.preferences.rulerUnits = startRulerUnits;
app.preferences.typeUnits = startTypeUnits;
app.displayDialogs = startDisplayDialogs;
*/
