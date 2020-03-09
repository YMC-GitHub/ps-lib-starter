//保存.psd
#target photoshop

#include config.jsx

function SaveForWeb(saveFile, format, quality){

	var webSaveOptions = new ExportOptionsSaveForWeb();

	// blur (Applies blur to the image to reduce artifacts)
	// Default: 0.0
	webSaveOptions.blur = 0.0;

	// colorReduction (The color reduction algorithm.)
	// Default: ColorReductionType.SELECTIVE
	// Range: ColorReductionType.PERCEPTUAL,
	//			ColorReductionType.SELECTIVE,
	//			ColorReductionType.ADAPTIVE,
	//			ColorReductionType.RESTRICTIVE,
	//			ColorReductionType.CUSTOM,
	//			ColorReductionType.BLACKWHITE
	//			ColorReductionType.GRAYSCALE,
	//			ColorReductionType.MACINTOSH
	//			ColorReductionType.WINDOWS
	webSaveOptions.colorReduction = ColorReductionType.SELECTIVE

	// colors (The number of colors in the palette.)
	// Default: 256
	webSaveOptions.colors = 256

	// dither (The type of dither)
	// Default: Dither.DIFFUSION
	// Range: Dither.DIFFUSION
	//			Dither.NOISE
	//			Dither.NONE
	//			Dither.PATTERN
	webSaveOptions.dither = Dither.DIFFUSION

	// ditherAmount (The amount of dither.Valid only when dither = Dither.DIFFUSION)
	// Default: 100
	webSaveOptions.ditherAmount = 100;

	// format (The file format to use)
	// Ddefault: SaveDocumentType.COMPUSERVEGIF
	// Range: SaveDocumentType.COMPUSERVEGIF,
	//			SaveDocumentType.JPEG,
	//			SaveDocumentType.PNG-8,
	//			SaveDocumentType.PNG-24,
	//			SaveDocumentType.BMP
	webSaveOptions.format = format;

	// includeProfile (True to include the document’s embedded color profile)
	// Default: false
	webSaveOptions.includeProfile = false;

	// interlaced (True to download in multiple passes progressive)
	// Default: false
	webSaveOptions.interlaced = false;

	// lossy (The amount of lossiness allowed)
	// Default: 0
	webSaveOptions.lossy = 0;

	// matteColor (The colors to blend transparent pixels against.)
	// Type: RGBColor
	//webSaveOptions.matteColor ;

	// optimized (True to create smaller but less compatible files. Valid only when format = SaveDocumentType.JPEG.)
	// Default: true
	webSaveOptions.optimized = true;

	// PNG8 (Indicates the number of bits; true = 8, false = 24. Valid only when format = SaveDocumentType.PNG.)
	// Default: true
	webSaveOptions.PNG8 = true;

	// quality (The quality of the produced image as a percentage)
	// Default: 60
	// Range: [0, 100]
	webSaveOptions.quality = quality;

	// transparency (Indication of transparent areas of the image should be included in the saved image)
	// Default: true
	webSaveOptions.transparency = true;

	// transparencyAmount (The amont of transparency dither. Valid only if transparency = true.)
	// Default: 100
	webSaveOptions.transparencyAmount = 100;

	// transparencyDither (The transparency dither algorithm)
	// Default: Dither.NONE
	// Range: Dither.DIFFUSION
	//			Dither.NOISE
	//			Dither.NONE
	//			Dither.PATTERN
	webSaveOptions.transparencyDither = Dither.NONE

	// typename (The class name of the referenced ExportOptionsSaveForWeb object.)
	// Read only
	//webSaveOptions.typename

	// webSnap (The tolerance amount within which to snap close colors to web palette colors)
	// Default: 0
	webSaveOptions.webSnap = 0;

	app.activeDocument.exportDocument(new File(saveFile), ExportType.SAVEFORWEB, webSaveOptions);
}

// =====================
// 导出jpg
// =====================

//webjpg
FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+"-web.jpg";
SaveForWeb(FILE,SaveDocumentType.JPEG,80);
//webpng
FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+"-png.png";
//SaveForWeb(FILE, SaveDocumentType.PNG-24, 80);
SaveForWeb(FILE, SaveDocumentType.JPEG, 80);

