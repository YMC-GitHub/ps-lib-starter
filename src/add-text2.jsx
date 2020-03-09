#target photoshop
var txtOpts={
  pos:{x:"0 px",y:"0 px"},
  size:"30 px",
  area:{w:"50 px",h:"50 px"},
  fontName:"FontAwesome",
  fontPostScriptName:"FontAwesome",
  content:"\uf006",//"\uf004"
}

//添加文本
// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc590 = new ActionDescriptor();
    //文本图层
    var idnull = charIDToTypeID( "null" );
        var ref77 = new ActionReference();
        var idTxLr = charIDToTypeID( "TxLr" );//textLayer
        ref77.putClass( idTxLr );
    desc590.putReference( idnull, ref77 );

    var idUsng = charIDToTypeID( "Usng" );
        var desc591 = new ActionDescriptor();
        //文本内容
        var idTxt = charIDToTypeID( "Txt " );//textKey
        desc591.putString( idTxt, txtOpts.content );//文本内容
        //文本容器
        var idwarp = stringIDToTypeID( "warp" );
            var desc592 = new ActionDescriptor();
            // 容器样式
            var idwarpStyle = stringIDToTypeID( "warpStyle" );
            var idwarpStyle = stringIDToTypeID( "warpStyle" );
            var idwarpNone = stringIDToTypeID( "warpNone" );
            desc592.putEnumerated( idwarpStyle, idwarpStyle, idwarpNone );
            // 容器取值
            var idwarpValue = stringIDToTypeID( "warpValue" );
            desc592.putDouble( idwarpValue, 0.000000 );
            //
            var idwarpPerspective = stringIDToTypeID( "warpPerspective" );
            desc592.putDouble( idwarpPerspective, 0.000000 );
            //
            var idwarpPerspectiveOther = stringIDToTypeID( "warpPerspectiveOther" );
            desc592.putDouble( idwarpPerspectiveOther, 0.000000 );
            // 容器旋转
            var idwarpRotate = stringIDToTypeID( "warpRotate" );
            var idOrnt = charIDToTypeID( "Ornt" );//orientation
            var idHrzn = charIDToTypeID( "Hrzn" );//horizontal
            desc592.putEnumerated( idwarpRotate, idOrnt, idHrzn );
        var idwarp = stringIDToTypeID( "warp" );
        desc591.putObject( idwarp, idwarp, desc592 );
        // 文本点击坐标
        var idTxtC = charIDToTypeID( "TxtC" );//textClickPoint
            var desc593 = new ActionDescriptor();
            // 水平-x
            var idHrzn = charIDToTypeID( "Hrzn" );//horizontal
            var idPrc = charIDToTypeID( "#Prc" );//percentUnit
            desc593.putUnitDouble( idHrzn, idPrc, 10);//10
            // 竖直-y
            var idVrtc = charIDToTypeID( "Vrtc" );//vertical
            var idPrc = charIDToTypeID( "#Prc" );
            desc593.putUnitDouble( idVrtc, idPrc, 8 );//8
        var idPnt = charIDToTypeID( "Pnt " );//paint
        desc591.putObject( idTxtC, idPnt, desc593 );
        // 文本栅格
        var idtextGridding = stringIDToTypeID( "textGridding" );
        var idtextGridding = stringIDToTypeID( "textGridding" );
        var idNone = charIDToTypeID( "None" );
        desc591.putEnumerated( idtextGridding, idtextGridding, idNone );
        // 文本方向
        var idOrnt = charIDToTypeID( "Ornt" );//orientation
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc591.putEnumerated( idOrnt, idOrnt, idHrzn );
        // 文本反锯齿
        var idAntA = charIDToTypeID( "AntA" );//antiAlias
        var idAnnt = charIDToTypeID( "Annt" );//antiAliasType
        var idAnCr = charIDToTypeID( "AnCr" );//antiAliasCrisp
        desc591.putEnumerated( idAntA, idAnnt, idAnCr );
        // 边界
        var idbounds = stringIDToTypeID( "bounds" );
            var desc594 = new ActionDescriptor();
            //左
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc594.putUnitDouble( idLeft, idPxl, 0+txtOpts.pos.x.match(/\d+/) );
            //desc594.putUnitDouble( idLeft, idPxl, 0+txtOpts.pos.x.match(/\d+/)-txtOpts.area.w.match(/\d+/)  );
            //上
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc594.putUnitDouble( idTop, idPxl, 0+txtOpts.pos.y.match(/\d+/) );//
            //desc594.putUnitDouble( idLeft, idPxl, 0+txtOpts.pos.x.match(/\d+/)-txtOpts.area.h.match(/\d+/) );
            //右
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            //desc594.putUnitDouble( idRght, idPxl, 0+txtOpts.area.w.match(/\d+/) );
            desc594.putUnitDouble( idRght, idPxl, 0+txtOpts.area.w.match(/\d+/) );
            //下
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            //desc594.putUnitDouble( idBtom, idPxl, 0+txtOpts.area.h.match(/\d+/) );
            esc594.putUnitDouble( idBtom, idPxl, 0+txtOpts.area.h.match(/\d+/) );

        var idbounds = stringIDToTypeID( "bounds" );
        desc591.putObject( idbounds, idbounds, desc594 );
        // 边界盒子
        var idboundingBox = stringIDToTypeID( "boundingBox" );
            var desc595 = new ActionDescriptor();
            //左
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc595.putUnitDouble( idLeft, idPxl, 0+txtOpts.pos.x.match(/\d+/)  );
            //上
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc595.putUnitDouble( idTop, idPxl, 0+txtOpts.pos.y.match(/\d+/) );
            //右
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc595.putUnitDouble( idRght, idPxl, 0+txtOpts.area.w.match(/\d+/)  );
            //下
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc595.putUnitDouble( idBtom, idPxl, 0+txtOpts.area.h.match(/\d+/)  );
        var idboundingBox = stringIDToTypeID( "boundingBox" );
        desc591.putObject( idboundingBox, idboundingBox, desc595 );
        // 文本形状
        var idtextShape = stringIDToTypeID( "textShape" );
            var list133 = new ActionList();
                var desc596 = new ActionDescriptor();
                //绘制字符
                var idTEXT = charIDToTypeID( "TEXT" );//char
                var idTEXT = charIDToTypeID( "TEXT" );
                var idPnt = charIDToTypeID( "Pnt " );//paint
                desc596.putEnumerated( idTEXT, idTEXT, idPnt );
                //
                var idOrnt = charIDToTypeID( "Ornt" );
                var idOrnt = charIDToTypeID( "Ornt" );
                var idHrzn = charIDToTypeID( "Hrzn" );
                desc596.putEnumerated( idOrnt, idOrnt, idHrzn );
                // 变换
                var idTrnf = charIDToTypeID( "Trnf" );//transform
                    var desc597 = new ActionDescriptor();
                    var idxx = stringIDToTypeID( "xx" );
                    desc597.putDouble( idxx, 1.000000 );
                    var idxy = stringIDToTypeID( "xy" );
                    desc597.putDouble( idxy, 0.000000 );
                    var idyx = stringIDToTypeID( "yx" );
                    desc597.putDouble( idyx, 0.000000 );
                    var idyy = stringIDToTypeID( "yy" );
                    desc597.putDouble( idyy, 1.000000 );
                    var idtx = stringIDToTypeID( "tx" );
                    desc597.putDouble( idtx, 0.000000 );
                    var idty = stringIDToTypeID( "ty" );
                    desc597.putDouble( idty, 0.000000 );
                var idTrnf = charIDToTypeID( "Trnf" );//transform
                desc596.putObject( idTrnf, idTrnf, desc597 );
                // 行的数量
                var idrowCount = stringIDToTypeID( "rowCount" );
                desc596.putInteger( idrowCount, 1 );
                // 列的数量
                var idcolumnCount = stringIDToTypeID( "columnCount" );
                desc596.putInteger( idcolumnCount, 1 );
                // rowMajorOrder
                var idrowMajorOrder = stringIDToTypeID( "rowMajorOrder" );
                desc596.putBoolean( idrowMajorOrder, true );
                // 行的间隔
                var idrowGutter = stringIDToTypeID( "rowGutter" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc596.putUnitDouble( idrowGutter, idPxl, 0.000000 );
                // 列的间隔
                var idcolumnGutter = stringIDToTypeID( "columnGutter" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc596.putUnitDouble( idcolumnGutter, idPxl, 0.000000 );
                // 空格
                var idSpcn = charIDToTypeID( "Spcn" );//spacing
                var idPxl = charIDToTypeID( "#Pxl" );
                desc596.putUnitDouble( idSpcn, idPxl, 0.000000 );
                //
                var idframeBaselineAlignment = stringIDToTypeID( "frameBaselineAlignment" );
                var idframeBaselineAlignment = stringIDToTypeID( "frameBaselineAlignment" );
                var idalignByAscent = stringIDToTypeID( "alignByAscent" );
                desc596.putEnumerated( idframeBaselineAlignment, idframeBaselineAlignment, idalignByAscent );
                //
                var idfirstBaselineMinimum = stringIDToTypeID( "firstBaselineMinimum" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc596.putUnitDouble( idfirstBaselineMinimum, idPxl, 0.000000 );
                //
                var idbase = stringIDToTypeID( "base" );
                    var desc598 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID( "Hrzn" );
                    desc598.putDouble( idHrzn, 0.000000 );
                    var idVrtc = charIDToTypeID( "Vrtc" );
                    desc598.putDouble( idVrtc, 0.000000 );
                var idPnt = charIDToTypeID( "Pnt " );
                desc596.putObject( idbase, idPnt, desc598 );

            var idtextShape = stringIDToTypeID( "textShape" );
            list133.putObject( idtextShape, desc596 );
        desc591.putList( idtextShape, list133 );
        //文字样式范围
        var idTxtt = charIDToTypeID( "Txtt" );//textStyleRange
            var list134 = new ActionList();
                var desc599 = new ActionDescriptor();
                //来自
                var idFrom = charIDToTypeID( "From" );
                desc599.putInteger( idFrom, 0 );
                //到达
                var idT = charIDToTypeID( "T   " );
                desc599.putInteger( idT, 2 );
                //文字样式
                var idTxtS = charIDToTypeID( "TxtS" );
                    var desc600 = new ActionDescriptor();
                    var idstyleSheetHasParent = stringIDToTypeID( "styleSheetHasParent" );
                    desc600.putBoolean( idstyleSheetHasParent, true );
                    //字体发布的脚本名字
                    var idfontPostScriptName = stringIDToTypeID( "fontPostScriptName" );
                    desc600.putString( idfontPostScriptName, txtOpts.fontPostScriptName );//设置字体
                    //字体名字
                    var idFntN = charIDToTypeID( "FntN" );
                    desc600.putString( idFntN, txtOpts.fontName );//设置字体
                    //字体样式
                    var idFntS = charIDToTypeID( "FntS" );
                    desc600.putString( idFntS, "R" );
                    //字体脚本
                    var idScrp = charIDToTypeID( "Scrp" );
                    desc600.putInteger( idScrp, 25 );
                    //字体类型
                    var idFntT = charIDToTypeID( "FntT" );
                    desc600.putInteger( idFntT, 2 );
                    //字体有效性
                    var idfontAvailable = stringIDToTypeID( "fontAvailable" );
                    desc600.putBoolean( idfontAvailable, true );
                    //字体大小
                    var idSz = charIDToTypeID( "Sz  " );
                    var idPxl = charIDToTypeID( "#Pxl" );
                    desc600.putUnitDouble( idSz, idPxl, 0+txtOpts.size.match(/\d+/)  );
                    //字体大小
                    var idimpliedFontSize = stringIDToTypeID( "impliedFontSize" );
                    var idPxl = charIDToTypeID( "#Pxl" );
                    desc600.putUnitDouble( idimpliedFontSize, idPxl, 0+txtOpts.size.match(/\d+/) );
                    // 拉伸
                    var idHrzS = charIDToTypeID( "HrzS" );//horizontalScale
                    desc600.putDouble( idHrzS, 100.000000 );
                    var idVrtS = charIDToTypeID( "VrtS" );
                    desc600.putDouble( idVrtS, 100.000000 );//verticalScale
                    //粗体
                    var idsyntheticBold = stringIDToTypeID( "syntheticBold" );
                    desc600.putBoolean( idsyntheticBold, false );
                    //斜体
                    var idsyntheticItalic = stringIDToTypeID( "syntheticItalic" );
                    desc600.putBoolean( idsyntheticItalic, false );
                    //自动行距
                    var idautoLeading = stringIDToTypeID( "autoLeading" );
                    desc600.putBoolean( idautoLeading, true );
                    //
                    var idTrck = charIDToTypeID( "Trck" );
                    desc600.putInteger( idTrck, 0 );
                    var idBsln = charIDToTypeID( "Bsln" );
                    var idPxl = charIDToTypeID( "#Pxl" );
                    desc600.putUnitDouble( idBsln, idPxl, 0.000000 );
                    var idimpliedBaselineShift = stringIDToTypeID( "impliedBaselineShift" );
                    var idPxl = charIDToTypeID( "#Pxl" );
                    desc600.putUnitDouble( idimpliedBaselineShift, idPxl, 0.000000 );
                    var idAtKr = charIDToTypeID( "AtKr" );
                    var idAtKr = charIDToTypeID( "AtKr" );
                    var idmetricsKern = stringIDToTypeID( "metricsKern" );
                    desc600.putEnumerated( idAtKr, idAtKr, idmetricsKern );
                    var idfontCaps = stringIDToTypeID( "fontCaps" );
                    var idfontCaps = stringIDToTypeID( "fontCaps" );
                    var idNrml = charIDToTypeID( "Nrml" );
                    desc600.putEnumerated( idfontCaps, idfontCaps, idNrml );
                    var iddigitSet = stringIDToTypeID( "digitSet" );
                    var iddigitSet = stringIDToTypeID( "digitSet" );
                    var iddefaultDigits = stringIDToTypeID( "defaultDigits" );
                    desc600.putEnumerated( iddigitSet, iddigitSet, iddefaultDigits );
                    var idkashidas = stringIDToTypeID( "kashidas" );
                    var idkashidas = stringIDToTypeID( "kashidas" );
                    var idkashidaDefault = stringIDToTypeID( "kashidaDefault" );
                    desc600.putEnumerated( idkashidas, idkashidas, idkashidaDefault );
                    //偏移
                    var iddiacXOffset = stringIDToTypeID( "diacXOffset" );
                    var idPxl = charIDToTypeID( "#Pxl" );
                    desc600.putUnitDouble( iddiacXOffset, idPxl, 0.000000 );
                    var iddiacYOffset = stringIDToTypeID( "diacYOffset" );
                    var idPxl = charIDToTypeID( "#Pxl" );
                    desc600.putUnitDouble( iddiacYOffset, idPxl, 0.000000 );
                    //
                    var idmarkYDistFromBaseline = stringIDToTypeID( "markYDistFromBaseline" );
                    var idPxl = charIDToTypeID( "#Pxl" );
                    desc600.putUnitDouble( idmarkYDistFromBaseline, idPxl, 0+txtOpts.area.h.match(/\d+/) );
                    var idbaseline = stringIDToTypeID( "baseline" );
                    var idbaseline = stringIDToTypeID( "baseline" );
                    var idNrml = charIDToTypeID( "Nrml" );
                    desc600.putEnumerated( idbaseline, idbaseline, idNrml );
                    var idotbaseline = stringIDToTypeID( "otbaseline" );
                    var idotbaseline = stringIDToTypeID( "otbaseline" );
                    var idNrml = charIDToTypeID( "Nrml" );
                    desc600.putEnumerated( idotbaseline, idotbaseline, idNrml );
                    var idstrikethrough = stringIDToTypeID( "strikethrough" );
                    var idstrikethrough = stringIDToTypeID( "strikethrough" );
                    var idstrikethroughOff = stringIDToTypeID( "strikethroughOff" );
                    desc600.putEnumerated( idstrikethrough, idstrikethrough, idstrikethroughOff );
                    var idUndl = charIDToTypeID( "Undl" );
                    var idUndl = charIDToTypeID( "Undl" );
                    var idunderlineOff = stringIDToTypeID( "underlineOff" );
                    desc600.putEnumerated( idUndl, idUndl, idunderlineOff );
                    var idligature = stringIDToTypeID( "ligature" );
                    desc600.putBoolean( idligature, true );
                    var idaltligature = stringIDToTypeID( "altligature" );
                    desc600.putBoolean( idaltligature, false );
                    var idcontextualLigatures = stringIDToTypeID( "contextualLigatures" );
                    desc600.putBoolean( idcontextualLigatures, false );
                    var idfractions = stringIDToTypeID( "fractions" );
                    desc600.putBoolean( idfractions, false );
                    var idordinals = stringIDToTypeID( "ordinals" );
                    desc600.putBoolean( idordinals, false );
                    var idswash = stringIDToTypeID( "swash" );
                    desc600.putBoolean( idswash, false );
                    var idtitling = stringIDToTypeID( "titling" );
                    desc600.putBoolean( idtitling, false );
                    var idconnectionForms = stringIDToTypeID( "connectionForms" );
                    desc600.putBoolean( idconnectionForms, false );
                    var idstylisticAlternates = stringIDToTypeID( "stylisticAlternates" );
                    desc600.putBoolean( idstylisticAlternates, false );
                    var idstylisticSets = stringIDToTypeID( "stylisticSets" );
                    desc600.putInteger( idstylisticSets, 0 );
                    var idornaments = stringIDToTypeID( "ornaments" );
                    desc600.putBoolean( idornaments, false );
                    var idjustificationAlternates = stringIDToTypeID( "justificationAlternates" );
                    desc600.putBoolean( idjustificationAlternates, false );
                    var idfigureStyle = stringIDToTypeID( "figureStyle" );
                    var idfigureStyle = stringIDToTypeID( "figureStyle" );
                    var idNrml = charIDToTypeID( "Nrml" );
                    desc600.putEnumerated( idfigureStyle, idfigureStyle, idNrml );
                    var idproportionalMetrics = stringIDToTypeID( "proportionalMetrics" );
                    desc600.putBoolean( idproportionalMetrics, false );
                    var idkana = stringIDToTypeID( "kana" );
                    desc600.putBoolean( idkana, false );
                    var iditalics = stringIDToTypeID( "italics" );
                    desc600.putBoolean( iditalics, false );
                    var idbaselineDirection = stringIDToTypeID( "baselineDirection" );
                    var idbaselineDirection = stringIDToTypeID( "baselineDirection" );
                    var idrotated = stringIDToTypeID( "rotated" );
                    desc600.putEnumerated( idbaselineDirection, idbaselineDirection, idrotated );
                    var idtextLanguage = stringIDToTypeID( "textLanguage" );
                    var idtextLanguage = stringIDToTypeID( "textLanguage" );
                    var idchineseLanguage = stringIDToTypeID( "chineseLanguage" );
                    desc600.putEnumerated( idtextLanguage, idtextLanguage, idchineseLanguage );
                    var idjapaneseAlternate = stringIDToTypeID( "japaneseAlternate" );
                    var idjapaneseAlternate = stringIDToTypeID( "japaneseAlternate" );
                    var iddefaultForm = stringIDToTypeID( "defaultForm" );
                    desc600.putEnumerated( idjapaneseAlternate, idjapaneseAlternate, iddefaultForm );
                    var idmojiZume = stringIDToTypeID( "mojiZume" );
                    desc600.putDouble( idmojiZume, 0.000000 );
                    var idgridAlignment = stringIDToTypeID( "gridAlignment" );
                    var idgridAlignment = stringIDToTypeID( "gridAlignment" );
                    var idroman = stringIDToTypeID( "roman" );
                    desc600.putEnumerated( idgridAlignment, idgridAlignment, idroman );
                    var idnoBreak = stringIDToTypeID( "noBreak" );
                    desc600.putBoolean( idnoBreak, false );
                    //填充颜色
                    var idClr = charIDToTypeID( "Clr " );//color
                        var desc601 = new ActionDescriptor();
                        var idRd = charIDToTypeID( "Rd  " );//red
                        desc601.putDouble( idRd, 119 );
                        var idGrn = charIDToTypeID( "Grn " );
                        desc601.putDouble( idGrn, 187 );
                        var idBl = charIDToTypeID( "Bl  " );
                        desc601.putDouble( idBl, 17 );
                    var idRGBC = charIDToTypeID( "RGBC" );
                    //描边颜色
                    desc600.putObject( idClr, idRGBC, desc601 );
                    var idstrokeColor = stringIDToTypeID( "strokeColor" );
                        var desc602 = new ActionDescriptor();
                        var idRd = charIDToTypeID( "Rd  " );
                        desc602.putDouble( idRd, 0.000000 );
                        var idGrn = charIDToTypeID( "Grn " );
                        desc602.putDouble( idGrn, 0.000000 );
                        var idBl = charIDToTypeID( "Bl  " );
                        desc602.putDouble( idBl, 0.000000 );
                    var idRGBC = charIDToTypeID( "RGBC" );
                    desc600.putObject( idstrokeColor, idRGBC, desc602 );
                    // 父级样式
                    var idbaseParentStyle = stringIDToTypeID( "baseParentStyle" );
                        var desc603 = new ActionDescriptor();
                        //字体
                        var idfontPostScriptName = stringIDToTypeID( "fontPostScriptName" );
                        desc603.putString( idfontPostScriptName, txtOpts.fontPostScriptName );//设置字体
                        // 字体名字
                        var idFntN = charIDToTypeID( "FntN" );//fontName
                        desc603.putString( idFntN, txtOpts.fontName );
                        // 字体样式名字
                        var idFntS = charIDToTypeID( "FntS" );//fontStyleName
                        desc603.putString( idFntS, "R" );//
                        // 字体脚本
                        var idScrp = charIDToTypeID( "Scrp" );//fontScript
                        desc603.putInteger( idScrp, 25 );
                        // 字体排版
                        var idFntT = charIDToTypeID( "FntT" );//fontTechnology
                        desc603.putInteger( idFntT, 2 );
                        //
                        var idfontAvailable = stringIDToTypeID( "fontAvailable" );
                        desc603.putBoolean( idfontAvailable, true );
                        // 大小
                        var idSz = charIDToTypeID( "Sz  " );//size
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idSz, idPxl, 12.000000 );
                        //
                        var idimpliedFontSize = stringIDToTypeID( "impliedFontSize" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idimpliedFontSize, idPxl, 12.000000 );
                        // y轴伸缩
                        var idHrzS = charIDToTypeID( "HrzS" );//horizontalScale
                        desc603.putDouble( idHrzS, 100.000000 );
                        // x轴伸缩
                        var idVrtS = charIDToTypeID( "VrtS" );//verticalScale
                        desc603.putDouble( idVrtS, 100.000000 );
                        // 粗体
                        var idsyntheticBold = stringIDToTypeID( "syntheticBold" );
                        desc603.putBoolean( idsyntheticBold, false );
                        // 斜体
                        var idsyntheticItalic = stringIDToTypeID( "syntheticItalic" );
                        desc603.putBoolean( idsyntheticItalic, false );
                        // 自动行距
                        var idautoLeading = stringIDToTypeID( "autoLeading" );
                        desc603.putBoolean( idautoLeading, true );
                        // 追踪
                        var idTrck = charIDToTypeID( "Trck" );//tracking
                        desc603.putInteger( idTrck, 0 );
                        //
                        var idBsln = charIDToTypeID( "Bsln" );//baselineShift
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idBsln, idPxl, 0.000000 );
                        //
                        var idimpliedBaselineShift = stringIDToTypeID( "impliedBaselineShift" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idimpliedBaselineShift, idPxl, 0.000000 );
                        // 字符旋转
                        var idcharacterRotation = stringIDToTypeID( "characterRotation" );
                        desc603.putDouble( idcharacterRotation, 0.000000 );
                        var idAtKr = charIDToTypeID( "AtKr" );//autoKern
                        var idAtKr = charIDToTypeID( "AtKr" );
                        var idmetricsKern = stringIDToTypeID( "metricsKern" );
                        desc603.putEnumerated( idAtKr, idAtKr, idmetricsKern );
                        //
                        var idfontCaps = stringIDToTypeID( "fontCaps" );
                        var idfontCaps = stringIDToTypeID( "fontCaps" );
                        var idNrml = charIDToTypeID( "Nrml" );
                        desc603.putEnumerated( idfontCaps, idfontCaps, idNrml );
                        //
                        var iddigitSet = stringIDToTypeID( "digitSet" );
                        var iddigitSet = stringIDToTypeID( "digitSet" );
                        var iddefaultDigits = stringIDToTypeID( "defaultDigits" );
                        desc603.putEnumerated( iddigitSet, iddigitSet, iddefaultDigits );
                        //
                        var iddirOverride = stringIDToTypeID( "dirOverride" );
                        var iddirOverride = stringIDToTypeID( "dirOverride" );
                        var iddirOverrideDefault = stringIDToTypeID( "dirOverrideDefault" );
                        desc603.putEnumerated( iddirOverride, iddirOverride, iddirOverrideDefault );
                        //
                        var idkashidas = stringIDToTypeID( "kashidas" );
                        var idkashidas = stringIDToTypeID( "kashidas" );
                        var idkashidaDefault = stringIDToTypeID( "kashidaDefault" );
                        desc603.putEnumerated( idkashidas, idkashidas, idkashidaDefault );
                        //
                        var iddiacVPos = stringIDToTypeID( "diacVPos" );
                        var iddiacVPos = stringIDToTypeID( "diacVPos" );
                        var iddiacVPosOpenType = stringIDToTypeID( "diacVPosOpenType" );
                        desc603.putEnumerated( iddiacVPos, iddiacVPos, iddiacVPosOpenType );
                        //
                        var iddiacXOffset = stringIDToTypeID( "diacXOffset" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( iddiacXOffset, idPxl, 0.000000 );
                        var iddiacYOffset = stringIDToTypeID( "diacYOffset" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( iddiacYOffset, idPxl, 0.000000 );
                        //
                        var idmarkYDistFromBaseline = stringIDToTypeID( "markYDistFromBaseline" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idmarkYDistFromBaseline, idPxl, 0+txtOpts.area.h.match(/\d+/) );
                        // 基线
                        var idbaseline = stringIDToTypeID( "baseline" );
                        var idbaseline = stringIDToTypeID( "baseline" );
                        var idNrml = charIDToTypeID( "Nrml" );
                        desc603.putEnumerated( idbaseline, idbaseline, idNrml );
                        // 轮廓基线
                        var idotbaseline = stringIDToTypeID( "otbaseline" );
                        var idotbaseline = stringIDToTypeID( "otbaseline" );
                        var idNrml = charIDToTypeID( "Nrml" );
                        desc603.putEnumerated( idotbaseline, idotbaseline, idNrml );
                        //
                        var idstrikethrough = stringIDToTypeID( "strikethrough" );
                        var idstrikethrough = stringIDToTypeID( "strikethrough" );
                        var idstrikethroughOff = stringIDToTypeID( "strikethroughOff" );
                        desc603.putEnumerated( idstrikethrough, idstrikethrough, idstrikethroughOff );
                        // 下划线
                        var idUndl = charIDToTypeID( "Undl" );
                        var idUndl = charIDToTypeID( "Undl" );
                        var idunderlineOff = stringIDToTypeID( "underlineOff" );
                        desc603.putEnumerated( idUndl, idUndl, idunderlineOff );
                        //
                        var idunderlineOffset = stringIDToTypeID( "underlineOffset" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idunderlineOffset, idPxl, 0.000000 );
                        //
                        var idligature = stringIDToTypeID( "ligature" );
                        desc603.putBoolean( idligature, true );
                        var idaltligature = stringIDToTypeID( "altligature" );
                        desc603.putBoolean( idaltligature, false );
                        var idcontextualLigatures = stringIDToTypeID( "contextualLigatures" );
                        desc603.putBoolean( idcontextualLigatures, false );
                        var idalternateLigatures = stringIDToTypeID( "alternateLigatures" );
                        desc603.putBoolean( idalternateLigatures, false );
                        var idoldStyle = stringIDToTypeID( "oldStyle" );
                        desc603.putBoolean( idoldStyle, false );
                        var idfractions = stringIDToTypeID( "fractions" );
                        desc603.putBoolean( idfractions, false );
                        var idordinals = stringIDToTypeID( "ordinals" );
                        desc603.putBoolean( idordinals, false );
                        var idswash = stringIDToTypeID( "swash" );
                        desc603.putBoolean( idswash, false );
                        var idtitling = stringIDToTypeID( "titling" );
                        desc603.putBoolean( idtitling, false );
                        var idconnectionForms = stringIDToTypeID( "connectionForms" );
                        desc603.putBoolean( idconnectionForms, false );
                        var idstylisticAlternates = stringIDToTypeID( "stylisticAlternates" );
                        desc603.putBoolean( idstylisticAlternates, false );
                        var idstylisticSets = stringIDToTypeID( "stylisticSets" );
                        desc603.putInteger( idstylisticSets, 0 );
                        var idornaments = stringIDToTypeID( "ornaments" );
                        desc603.putBoolean( idornaments, false );
                        var idjustificationAlternates = stringIDToTypeID( "justificationAlternates" );
                        desc603.putBoolean( idjustificationAlternates, false );
                        var idfigureStyle = stringIDToTypeID( "figureStyle" );
                        var idfigureStyle = stringIDToTypeID( "figureStyle" );
                        var idNrml = charIDToTypeID( "Nrml" );
                        desc603.putEnumerated( idfigureStyle, idfigureStyle, idNrml );
                        var idproportionalMetrics = stringIDToTypeID( "proportionalMetrics" );
                        desc603.putBoolean( idproportionalMetrics, false );
                        var idkana = stringIDToTypeID( "kana" );
                        desc603.putBoolean( idkana, false );
                        var iditalics = stringIDToTypeID( "italics" );
                        desc603.putBoolean( iditalics, false );
                        var idruby = stringIDToTypeID( "ruby" );
                        desc603.putBoolean( idruby, false );
                        var idbaselineDirection = stringIDToTypeID( "baselineDirection" );
                        var idbaselineDirection = stringIDToTypeID( "baselineDirection" );
                        var idrotated = stringIDToTypeID( "rotated" );
                        desc603.putEnumerated( idbaselineDirection, idbaselineDirection, idrotated );
                        var idtextLanguage = stringIDToTypeID( "textLanguage" );
                        var idtextLanguage = stringIDToTypeID( "textLanguage" );
                        var idenglishLanguage = stringIDToTypeID( "englishLanguage" );
                        desc603.putEnumerated( idtextLanguage, idtextLanguage, idenglishLanguage );
                        var idjapaneseAlternate = stringIDToTypeID( "japaneseAlternate" );
                        var idjapaneseAlternate = stringIDToTypeID( "japaneseAlternate" );
                        var iddefaultForm = stringIDToTypeID( "defaultForm" );
                        desc603.putEnumerated( idjapaneseAlternate, idjapaneseAlternate, iddefaultForm );
                        var idmojiZume = stringIDToTypeID( "mojiZume" );
                        desc603.putDouble( idmojiZume, 0.000000 );
                        var idgridAlignment = stringIDToTypeID( "gridAlignment" );
                        var idgridAlignment = stringIDToTypeID( "gridAlignment" );
                        var idroman = stringIDToTypeID( "roman" );
                        desc603.putEnumerated( idgridAlignment, idgridAlignment, idroman );
                        var idenableWariChu = stringIDToTypeID( "enableWariChu" );
                        desc603.putBoolean( idenableWariChu, false );
                        var idwariChuCount = stringIDToTypeID( "wariChuCount" );
                        desc603.putInteger( idwariChuCount, 2 );
                        var idwariChuLineGap = stringIDToTypeID( "wariChuLineGap" );
                        desc603.putInteger( idwariChuLineGap, 0 );
                        var idwariChuScale = stringIDToTypeID( "wariChuScale" );
                        desc603.putDouble( idwariChuScale, 0.500000 );
                        var idwariChuWidow = stringIDToTypeID( "wariChuWidow" );
                        desc603.putInteger( idwariChuWidow, 2 );
                        var idwariChuOrphan = stringIDToTypeID( "wariChuOrphan" );
                        desc603.putInteger( idwariChuOrphan, 2 );
                        var idwariChuJustification = stringIDToTypeID( "wariChuJustification" );
                        var idwariChuJustification = stringIDToTypeID( "wariChuJustification" );
                        var idwariChuAutoJustify = stringIDToTypeID( "wariChuAutoJustify" );
                        desc603.putEnumerated( idwariChuJustification, idwariChuJustification, idwariChuAutoJustify );
                        var idtcyUpDown = stringIDToTypeID( "tcyUpDown" );
                        desc603.putInteger( idtcyUpDown, 0 );
                        var idtcyLeftRight = stringIDToTypeID( "tcyLeftRight" );
                        desc603.putInteger( idtcyLeftRight, 0 );
                        var idleftAki = stringIDToTypeID( "leftAki" );
                        desc603.putDouble( idleftAki, -1.000000 );
                        var idrightAki = stringIDToTypeID( "rightAki" );
                        desc603.putDouble( idrightAki, -1.000000 );
                        var idjiDori = stringIDToTypeID( "jiDori" );
                        desc603.putInteger( idjiDori, 0 );
                        var idnoBreak = stringIDToTypeID( "noBreak" );
                        desc603.putBoolean( idnoBreak, false );
                        // 填充颜色
                        var idClr = charIDToTypeID( "Clr " );
                            var desc604 = new ActionDescriptor();
                            var idRd = charIDToTypeID( "Rd  " );
                            desc604.putDouble( idRd, 0.000000 );
                            var idGrn = charIDToTypeID( "Grn " );
                            desc604.putDouble( idGrn, 0.000000 );
                            var idBl = charIDToTypeID( "Bl  " );
                            desc604.putDouble( idBl, 0.000000 );
                        var idRGBC = charIDToTypeID( "RGBC" );
                        desc603.putObject( idClr, idRGBC, desc604 );
                        // 描边颜色
                        var idstrokeColor = stringIDToTypeID( "strokeColor" );
                            var desc605 = new ActionDescriptor();
                            var idRd = charIDToTypeID( "Rd  " );
                            desc605.putDouble( idRd, 0.000000 );
                            var idGrn = charIDToTypeID( "Grn " );
                            desc605.putDouble( idGrn, 0.000000 );
                            var idBl = charIDToTypeID( "Bl  " );
                            desc605.putDouble( idBl, 0.000000 );
                        var idRGBC = charIDToTypeID( "RGBC" );
                        desc603.putObject( idstrokeColor, idRGBC, desc605 );
                        var idFl = charIDToTypeID( "Fl  " );
                        desc603.putBoolean( idFl, true );
                        var idStrk = charIDToTypeID( "Strk" );
                        desc603.putBoolean( idStrk, false );
                        var idfillFirst = stringIDToTypeID( "fillFirst" );
                        desc603.putBoolean( idfillFirst, true );
                        var idfillOverPrint = stringIDToTypeID( "fillOverPrint" );
                        desc603.putBoolean( idfillOverPrint, false );
                        var idstrokeOverPrint = stringIDToTypeID( "strokeOverPrint" );
                        desc603.putBoolean( idstrokeOverPrint, false );
                        var idlineCap = stringIDToTypeID( "lineCap" );
                        var idlineCap = stringIDToTypeID( "lineCap" );
                        var idbuttCap = stringIDToTypeID( "buttCap" );
                        desc603.putEnumerated( idlineCap, idlineCap, idbuttCap );
                        var idlineJoin = stringIDToTypeID( "lineJoin" );
                        var idlineJoin = stringIDToTypeID( "lineJoin" );
                        var idmiterJoin = stringIDToTypeID( "miterJoin" );
                        desc603.putEnumerated( idlineJoin, idlineJoin, idmiterJoin );
                        var idlineWidth = stringIDToTypeID( "lineWidth" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idlineWidth, idPxl, 1.000000 );
                        var idmiterLimit = stringIDToTypeID( "miterLimit" );
                        var idPxl = charIDToTypeID( "#Pxl" );
                        desc603.putUnitDouble( idmiterLimit, idPxl, 4.000000 );
                        var idlineDashoffset = stringIDToTypeID( "lineDashoffset" );
                        desc603.putDouble( idlineDashoffset, 0.000000 );
                    var idTxtS = charIDToTypeID( "TxtS" );
                    desc600.putObject( idbaseParentStyle, idTxtS, desc603 );
                var idTxtS = charIDToTypeID( "TxtS" );
                desc599.putObject( idTxtS, idTxtS, desc600 );
            var idTxtt = charIDToTypeID( "Txtt" );
            list134.putObject( idTxtt, desc599 );
        desc591.putList( idTxtt, list134 );
        // 排版样式范围
        var idparagraphStyleRange = stringIDToTypeID( "paragraphStyleRange" );
            var list135 = new ActionList();
                var desc606 = new ActionDescriptor();
                //来自
                var idFrom = charIDToTypeID( "From" );
                desc606.putInteger( idFrom, 0 );
                //到底
                var idT = charIDToTypeID( "T   " );
                desc606.putInteger( idT, 2 );
                //排版样式
                var idparagraphStyle = stringIDToTypeID( "paragraphStyle" );
                    var desc607 = new ActionDescriptor();
                    var idstyleSheetHasParent = stringIDToTypeID( "styleSheetHasParent" );
                    desc607.putBoolean( idstyleSheetHasParent, true );
                    var idAlgn = charIDToTypeID( "Algn" );
                    var idAlg = charIDToTypeID( "Alg " );
                    var idCntr = charIDToTypeID( "Cntr" );
                    desc607.putEnumerated( idAlgn, idAlg, idCntr );
                var idparagraphStyle = stringIDToTypeID( "paragraphStyle" );
                desc606.putObject( idparagraphStyle, idparagraphStyle, desc607 );
            var idparagraphStyleRange = stringIDToTypeID( "paragraphStyleRange" );
            list135.putObject( idparagraphStyleRange, desc606 );
        desc591.putList( idparagraphStyleRange, list135 );
        var idkerningRange = stringIDToTypeID( "kerningRange" );
            var list136 = new ActionList();
        desc591.putList( idkerningRange, list136 );
    var idTxLr = charIDToTypeID( "TxLr" );//textLayer
    desc590.putObject( idUsng, idTxLr, desc591 );
    var idLyrI = charIDToTypeID( "LyrI" );//layerID
    desc590.putInteger( idLyrI, 10 );
executeAction( idMk, desc590, DialogModes.NO );
