//保存.psd
#target photoshop

#include config.jsx

// =====================
// 导出jpg
// =====================
FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+".jpg";
// 文件指针
var fileOut = new File(FILE);
//fileOut.changePath(FILE)
// 导出选项
var exportOptions = new ExportOptionsSaveForWeb();
//图片格式
exportOptions.PNG8 = false;
exportOptions.format=SaveDocumentType.JPEG;
//压缩质量
exportOptions.quality = 80;
//保存图片
app.activeDocument.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptions);
