//保存.psd
#target photoshop

#include config.jsx

function SavePNG(saveFile, compression){
	pngSaveOptions = new PNGSaveOptions();

	// compression (The compression value)
	// Default: 0
	// Range: [0,9]
	pngSaveOptions.compression = compression

	// interlaced (True to interlace rows)
	// Default: false
	pngSaveOptions.interlaced = false

	// typename (The class name of the referenced PNGSaveOptions object.)
	// Read only
	//pngSaveOptions.typename

	app.activeDocument.saveAs(new File(saveFile), pngSaveOptions, true,Extension.LOWERCASE);
}

// =====================
// 导出png
// =====================
FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+".png";
SavePNG(FILE,0)


