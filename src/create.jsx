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

// 创建文档
var newDoc;
// 文档它的宽高
var width = UnitValue("400 px");
var height = UnitValue("400 px");
// 文档它的分辨率。
var resolution = 72;
// 文档它的名字
var docName = "js says hello ps";
// 文档的颜色模式
var mode = NewDocumentMode.RGB;
// 文档的默认背景填充颜色
var initialFill = DocumentFill.TRANSPARENT;
// 文档的像素比率
var pixelAspectRatio = 1;
newDoc = app.documents.add(width, height, resolution, docName, mode, initialFill, pixelAspectRatio);


// 创建图层
var newLayer = newDoc.artLayers.add();

// 创建文字
// 修改图层：图层转换为文本图层
newLayer.kind = LayerKind.TEXT
// 文本类型
newLayer.textItem.kind = TextType.PARAGRAPHTEXT
// 文本宽高
newLayer.textItem.width = UnitValue("300 px")
newLayer.textItem.height = UnitValue("150 px")
// 文本位置
newLayer.textItem.position= [UnitValue("50px"), UnitValue("100px")]
// 文本大小
newLayer.textItem.size = UnitValue("40 px")
// 文本内容
newLayer.textItem.contents= "Holle World!"
// 文本对齐
newLayer.textItem.justification = Justification.CENTER
// 文本颜色
// 创建色彩
var c = new SolidColor();
// 颜色取值
c.rgb.hexValue = "77bb11";
newLayer.textItem.color = c;

// 恢复旧的状态
app.preferences.rulerUnits = startRulerUnits;
app.preferences.typeUnits = startTypeUnits;
app.displayDialogs = startDisplayDialogs;
