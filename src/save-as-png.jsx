//保存.psd
#target photoshop

#include config.jsx

// =====================
// 导出png
// =====================
FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+".png";
// 文件指针
var fileOut = new File(FILE);
// 导出选项
var exportOptions = new ExportOptionsSaveForWeb();
// 压缩格式
exportOptions.PNG8 = true;
// 导出图片
//newDoc.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptions);
app.activeDocument.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptions);
