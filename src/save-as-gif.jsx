//保存.psd
#target photoshop

#include config.jsx

// =====================
// 导出gif
// =====================
FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+".gif";
// 文件指针
var fileOut = new File(FILE);
//fileOut.changePath(FILE)
// 导出选项
var exportOptions = new ExportOptionsSaveForWeb();
// 是否透明？
exportOptions.transparency = false;
//设置导出文档时，是否包含文档中内置的颜色档案(即色彩空间配置文件)。
exportOptions.includeProfile = true;
//设置导出文档时，有损压缩的程度。
exportOptions.lossy = 0;
//设置导出文档时，图片包含的色彩量(256种颜色)。
exportOptions.colors = 256;
//设置导出文档时，图片的减色算法为默认值ColorReductionType.SELECTIVE。共有9种压缩算法，详情请查看Photoshop脚本手册。
exportOptions.colorReduction = ColorReductionType.SELECTIVE;
//设置导出文档时，图片将被存储为.gif格式。
exportOptions.format = SaveDocumentType.COMPUSERVEGIF;
//设置导出文档时，图片的像素抖动值。
exportOptions.ditherAmount = 0;
//设置导出文档时，图片的像素抖动类型。抖动类型共有4种，详情请查看Photoshop脚本手册。
exportOptions.dither = Dither.NOISE;
//设置导出文档时，图片的调色板的类型。调色板类型共有12种，详情请查看Photoshop脚本手册。
exportOptions.palette = Palette.LOCALADAPTIVE;
//调用[document]的[exportDocument]方法，使用上面设置的各种参数，将当前文档导出并转换为GIF格式的文档。
app.activeDocument.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptions);
