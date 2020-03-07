#target photoshop

// 创建文档
var newDoc = app.documents.add(UnitValue("400 px"), UnitValue("400 px"), 72 ,"一个脚本创建的文件");

// 创建图层
var newLayer = newDoc.artLayers.add();

// 创建文字
// 修改图层：图层转换为文本图层。
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
