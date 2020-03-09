// 撤销操作
// =======================================================
var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
    var desc23 = new ActionDescriptor();
    var idcommandID = stringIDToTypeID( "commandID" );
    desc23.putInteger( idcommandID, 101 );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc23.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idinvokeCommand, desc23, DialogModes.NO );

// 打开图层样式选项
// =======================================================
var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
    var desc31 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc31.putInteger( idLvl, 1 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var identer = stringIDToTypeID( "enter" );
    desc31.putEnumerated( idStte, idStte, identer );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc31.putBoolean( idkcanDispatchWhileModal, true );
    var idTtl = charIDToTypeID( "Ttl " );
    desc31.putString( idTtl, "Layer Style" );
executeAction( idmodalStateChanged, desc31, DialogModes.NO );

// 设置内阴影
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc33 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref14 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref14.putEnumerated( idLyr, idOrdn, idTrgt );
    desc33.putReference( idnull, ref14 );
    var idT = charIDToTypeID( "T   " );
        var desc34 = new ActionDescriptor();
        var idOpct = charIDToTypeID( "Opct" );
        var idPrc = charIDToTypeID( "#Prc" );
        desc34.putUnitDouble( idOpct, idPrc, 35.000000 );
        var idMd = charIDToTypeID( "Md  " );
        var idBlnM = charIDToTypeID( "BlnM" );
        var idMltp = charIDToTypeID( "Mltp" );
        desc34.putEnumerated( idMd, idBlnM, idMltp );
        var idLefx = charIDToTypeID( "Lefx" );
            var desc35 = new ActionDescriptor();
            var idScl = charIDToTypeID( "Scl " );
            var idPrc = charIDToTypeID( "#Prc" );
            desc35.putUnitDouble( idScl, idPrc, 100.000000 );
            var idIrSh = charIDToTypeID( "IrSh" );
                var desc36 = new ActionDescriptor();
                var idenab = charIDToTypeID( "enab" );
                desc36.putBoolean( idenab, true );
                var idpresent = stringIDToTypeID( "present" );
                desc36.putBoolean( idpresent, true );
                var idshowInDialog = stringIDToTypeID( "showInDialog" );
                desc36.putBoolean( idshowInDialog, true );
                var idMd = charIDToTypeID( "Md  " );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idMltp = charIDToTypeID( "Mltp" );
                desc36.putEnumerated( idMd, idBlnM, idMltp );
                var idClr = charIDToTypeID( "Clr " );
                    var desc37 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc37.putDouble( idRd, 0.000000 );//
                    var idGrn = charIDToTypeID( "Grn " );
                    desc37.putDouble( idGrn, 0.000000 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc37.putDouble( idBl, 0.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc36.putObject( idClr, idRGBC, desc37 );
                //透明度
                var idOpct = charIDToTypeID( "Opct" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc36.putUnitDouble( idOpct, idPrc, 93 );
                //角度
                var iduglg = charIDToTypeID( "uglg" );
                desc36.putBoolean( iduglg, true );
                var idlagl = charIDToTypeID( "lagl" );
                var idAng = charIDToTypeID( "#Ang" );
                desc36.putUnitDouble( idlagl, idAng, 90.000000 );
                //距离
                var idDstn = charIDToTypeID( "Dstn" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc36.putUnitDouble( idDstn, idPxl, 5 );
                //阻塞
                var idCkmt = charIDToTypeID( "Ckmt" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc36.putUnitDouble( idCkmt, idPxl, 24 );
                //大小
                var idblur = charIDToTypeID( "blur" );
                var idPxl = charIDToTypeID( "#Pxl" );
                desc36.putUnitDouble( idblur, idPxl, 10 );
                //
                var idNose = charIDToTypeID( "Nose" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc36.putUnitDouble( idNose, idPrc, 0.000000 );
                //
                var idAntA = charIDToTypeID( "AntA" );
                desc36.putBoolean( idAntA, false );
                var idTrnS = charIDToTypeID( "TrnS" );
                    var desc38 = new ActionDescriptor();
                    var idNm = charIDToTypeID( "Nm  " );
                    desc38.putString( idNm, "Linear" );
                var idShpC = charIDToTypeID( "ShpC" );
                desc36.putObject( idTrnS, idShpC, desc38 );
            var idIrSh = charIDToTypeID( "IrSh" );
            desc35.putObject( idIrSh, idIrSh, desc36 );
        var idLefx = charIDToTypeID( "Lefx" );
        desc34.putObject( idLefx, idLefx, desc35 );
    var idLyr = charIDToTypeID( "Lyr " );
    desc33.putObject( idT, idLyr, desc34 );
executeAction( idsetd, desc33, DialogModes.NO );

// 雕刻文字
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc148 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref32 = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idLefx = charIDToTypeID( "Lefx" );
        ref32.putProperty( idPrpr, idLefx );
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref32.putEnumerated( idLyr, idOrdn, idTrgt );
    desc148.putReference( idnull, ref32 );
    var idT = charIDToTypeID( "T   " );
        var desc149 = new ActionDescriptor();
        var idScl = charIDToTypeID( "Scl " );
        var idPrc = charIDToTypeID( "#Prc" );
        desc149.putUnitDouble( idScl, idPrc, 100.000000 );
        var idebbl = charIDToTypeID( "ebbl" );
            var desc150 = new ActionDescriptor();
            var idenab = charIDToTypeID( "enab" );
            desc150.putBoolean( idenab, true );
            var idpresent = stringIDToTypeID( "present" );
            desc150.putBoolean( idpresent, true );
            var idshowInDialog = stringIDToTypeID( "showInDialog" );
            desc150.putBoolean( idshowInDialog, true );
            var idhglM = charIDToTypeID( "hglM" );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idScrn = charIDToTypeID( "Scrn" );
            desc150.putEnumerated( idhglM, idBlnM, idScrn );
            var idhglC = charIDToTypeID( "hglC" );
                var desc151 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc151.putDouble( idRd, 255.000000 );
                var idGrn = charIDToTypeID( "Grn " );
                desc151.putDouble( idGrn, 255.000000 );
                var idBl = charIDToTypeID( "Bl  " );
                desc151.putDouble( idBl, 255.000000 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc150.putObject( idhglC, idRGBC, desc151 );
            var idhglO = charIDToTypeID( "hglO" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc150.putUnitDouble( idhglO, idPrc, 50.000000 );
            var idsdwM = charIDToTypeID( "sdwM" );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idMltp = charIDToTypeID( "Mltp" );
            desc150.putEnumerated( idsdwM, idBlnM, idMltp );
            var idsdwC = charIDToTypeID( "sdwC" );
                var desc152 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc152.putDouble( idRd, 0.000000 );
                var idGrn = charIDToTypeID( "Grn " );
                desc152.putDouble( idGrn, 0.000000 );
                var idBl = charIDToTypeID( "Bl  " );
                desc152.putDouble( idBl, 0.000000 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc150.putObject( idsdwC, idRGBC, desc152 );
            var idsdwO = charIDToTypeID( "sdwO" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc150.putUnitDouble( idsdwO, idPrc, 50.000000 );
            var idbvlT = charIDToTypeID( "bvlT" );
            var idbvlT = charIDToTypeID( "bvlT" );
            var idSfBL = charIDToTypeID( "SfBL" );
            desc150.putEnumerated( idbvlT, idbvlT, idSfBL );
            var idbvlS = charIDToTypeID( "bvlS" );
            var idBESl = charIDToTypeID( "BESl" );
            var idEmbs = charIDToTypeID( "Embs" );
            desc150.putEnumerated( idbvlS, idBESl, idEmbs );
            var iduglg = charIDToTypeID( "uglg" );
            desc150.putBoolean( iduglg, true );
            var idlagl = charIDToTypeID( "lagl" );
            var idAng = charIDToTypeID( "#Ang" );
            desc150.putUnitDouble( idlagl, idAng, 90.000000 );
            var idLald = charIDToTypeID( "Lald" );
            var idAng = charIDToTypeID( "#Ang" );
            desc150.putUnitDouble( idLald, idAng, 30.000000 );
            var idsrgR = charIDToTypeID( "srgR" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc150.putUnitDouble( idsrgR, idPrc, 100.000000 );
            var idblur = charIDToTypeID( "blur" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc150.putUnitDouble( idblur, idPxl, 7.000000 );
            var idbvlD = charIDToTypeID( "bvlD" );
            var idBESs = charIDToTypeID( "BESs" );
            var idIn = charIDToTypeID( "In  " );
            desc150.putEnumerated( idbvlD, idBESs, idIn );
            var idTrnS = charIDToTypeID( "TrnS" );
                var desc153 = new ActionDescriptor();
                var idNm = charIDToTypeID( "Nm  " );
                desc153.putString( idNm, "Linear" );
            var idShpC = charIDToTypeID( "ShpC" );
            desc150.putObject( idTrnS, idShpC, desc153 );
            var idantialiasGloss = stringIDToTypeID( "antialiasGloss" );
            desc150.putBoolean( idantialiasGloss, false );
            var idSftn = charIDToTypeID( "Sftn" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc150.putUnitDouble( idSftn, idPxl, 0.000000 );
            var iduseShape = stringIDToTypeID( "useShape" );
            desc150.putBoolean( iduseShape, false );
            var iduseTexture = stringIDToTypeID( "useTexture" );
            desc150.putBoolean( iduseTexture, false );
        var idebbl = charIDToTypeID( "ebbl" );
        desc149.putObject( idebbl, idebbl, desc150 );
    var idLefx = charIDToTypeID( "Lefx" );
    desc148.putObject( idT, idLefx, desc149 );
executeAction( idsetd, desc148, DialogModes.NO );

//移动图层
// =======================================================
var idmove = charIDToTypeID( "move" );
    var desc1043 = new ActionDescriptor();
    //要移动的目标
    var idnull = charIDToTypeID( "null" );
        var ref149 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );//layer
        var idOrdn = charIDToTypeID( "Ordn" );//ordinal
        var idTrgt = charIDToTypeID( "Trgt" );//targetEnum
        ref149.putEnumerated( idLyr, idOrdn, idTrgt );
    desc1043.putReference( idnull, ref149 );
    //要移到的位置
    var idT = charIDToTypeID( "T   " );
        var desc1044 = new ActionDescriptor();
        //x
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc1044.putUnitDouble( idHrzn, idPxl, 0.000000 );
        //y
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc1044.putUnitDouble( idVrtc, idPxl, -44.000000 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc1043.putObject( idT, idOfst, desc1044 );
executeAction( idmove, desc1043, DialogModes.NO );
