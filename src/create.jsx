#target photoshop

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

// 执行某些操作
// do sth. here
//...
#include config.jsx
#include create-doc.jsx
#include create-bg.jsx
#include create-txt.jsx
#include delete-layer1.jsx

// 恢复旧的状态
app.preferences.rulerUnits = startRulerUnits;
app.preferences.typeUnits = startTypeUnits;
app.displayDialogs = startDisplayDialogs;
