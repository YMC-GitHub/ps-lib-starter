//保存.psd
#target photoshop

#include config.jsx


function SaveJPG(saveFile, quality){
	jpgSaveOptions = new JPEGSaveOptions();

	// embedColorProfile (True to embed the color profile in the document.)
	jpgSaveOptions.embedColorProfile = true;

	// formatOptions (The download format to use.)
	// Default: FormatOptions.STANDARDBASELINE
	// Range: FormatOptions.STANDARDBASELINE,
	//			FormatOptions.OPTIMIZEDBASELINE,
	//			FormatOptions.PROGRESSIVE
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;

	// matte (The color to use to fill anti-aliased edges adjacent to transparent areas of the image.
	//			When transparency is turned off for an image, the matte color is applied to transparent areas.)
	// Default: MatteType.WHITE
	// Range: MatteType.BACKGROUND
	//			MatteType.BLACK
	//			MatteType.FOREGROUND
	//			MatteType.NETSCAPE
	//			MatteType.NONE
	//			MatteType.SEMIGRAY
	//			MatteType.WHITE
	jpgSaveOptions.matte = MatteType.NONE;

	// quality (The image quality setting to use; affects file size and compression)
	// Default: 3
	// Range: [0,12]
	jpgSaveOptions.quality = quality;

	// scans (The number of scans to make to incrementally display the image on the page.
	//			Valid only for when formatOptions = FormatOptions.PROGRESSIVE.)
	// Default: 3
	// Range: [3,5]
	//jpgSaveOptions.scans = 3

	// typename (The class name of the referenced JPEGSaveOptions object.)
	// Read only
	//jpgSaveOptions.typename

	app.activeDocument.saveAs(new File(saveFile), jpgSaveOptions, true,Extension.LOWERCASE);
}


// =====================
// 导出jpg
// =====================
FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+".jpg";
SaveJPG(FILE,3)
