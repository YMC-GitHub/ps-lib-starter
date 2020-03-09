#target photoshop

#include config.jsx

// 填充内容
function fillpattern(){
  // =======================================================
  var idFl = charIDToTypeID( "Fl  " );//填充
      var desc41 = new ActionDescriptor();
      // set fill content type as pattern
      var idUsng = charIDToTypeID( "Usng" );
      var idFlCn = charIDToTypeID( "FlCn" );//填充内容
      var idPtrn = charIDToTypeID( "Ptrn" );//pattern
      desc41.putEnumerated( idUsng, idFlCn, idPtrn );
      // set custom pattern
      var idPtrn = charIDToTypeID( "Ptrn" );//pattern
          var desc42 = new ActionDescriptor();
          var idNm = charIDToTypeID( "Nm  " );//name
          desc42.putString( idNm, "Water—Clear" );//"Water—Clear"
          var idIdnt = charIDToTypeID( "Idnt" );//ID
          desc42.putString( idIdnt, "58046fe2-ea73-c447-ba3c-66607cc3d179" );
      var idPtrn = charIDToTypeID( "Ptrn" );//pattern
      desc41.putObject( idPtrn, idPtrn, desc42 );
      // set blending opacity
      var idOpct = charIDToTypeID( "Opct" );//opacity
      var idPrc = charIDToTypeID( "#Prc" );//percentUnit
      desc41.putUnitDouble( idOpct, idPrc, 100.000000 );
      // set blending mode
      var idMd = charIDToTypeID( "Md  " );//mode
      var idBlnM = charIDToTypeID( "BlnM" );//blendMode
      var idNrml = charIDToTypeID( "Nrml" );//normal
      desc41.putEnumerated( idMd, idBlnM, idNrml );
  executeAction( idFl, desc41, DialogModes.NO );

  }

//创建圆形选区
function setCircleShapeSelection(shape,nextLayerId){
  // 选中图层
// =======================================================
  var idslct = charIDToTypeID( "slct" );//select
    var desc3 = new ActionDescriptor();
    // 哪个图层:
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );//layer
        //图层名字
        ref1.putName( idLyr, "Layer 1" );//图层 Layer 1
    desc3.putReference( idnull, ref1 );
    // 设为可见
    var idMkVs = charIDToTypeID( "MkVs" );//makeVisible
    desc3.putBoolean( idMkVs, false );
    // 哪个图层:
    var idLyrI = charIDToTypeID( "LyrI" );//layerID
        var list1 = new ActionList();
        //图层编号？下一图层？
        list1.putInteger( nextLayerId );//2?3?...
    desc3.putList( idLyrI, list1 );
executeAction( idslct, desc3, DialogModes.NO );

// 设置通道
// =======================================================
var idsetd = charIDToTypeID( "setd" );//set
    var desc12 = new ActionDescriptor();
    //选中通道
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );//channel
        var idfsel = charIDToTypeID( "fsel" );//selection
        ref5.putProperty( idChnl, idfsel );
    desc12.putReference( idnull, ref5 );
    // 到底哪里
    var idT = charIDToTypeID( "T   " );//to
        // 某一位置
        var desc13 = new ActionDescriptor();
        //top
        var idTop = charIDToTypeID( "Top " );//top
        var idPxl = charIDToTypeID( "#Pxl" );//pixelsUnit
        desc13.putUnitDouble( idTop, idPxl, shape.pos.y );//223 //y1
        //left
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc13.putUnitDouble( idLeft, idPxl, shape.pos.x );//181 //x1
        //bottom
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc13.putUnitDouble( idBtom, idPxl, shape.pos.y+shape.size.h );//373 //y2
        //right
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc13.putUnitDouble( idRght, idPxl, shape.pos.x+shape.size.w );//331  //x2
    // 某一椭圆
    var idElps = charIDToTypeID( "Elps" );//ellipse
    desc12.putObject( idT, idElps, desc13 );
    // 设反锯齿
    var idAntA = charIDToTypeID( "AntA" );//antiAlias
    desc12.putBoolean( idAntA, true );
executeAction( idsetd, desc12, DialogModes.NO );
}

 // ctrl+j
function CtrlJ(){
// =======================================================
/*
var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
var desc24 = new ActionDescriptor();
var idcommandID = stringIDToTypeID( "commandID" );
desc24.putInteger( idcommandID, 2970 );
var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
desc24.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idinvokeCommand, desc24, DialogModes.NO );
*/
// =======================================================
var idCpTL = charIDToTypeID( "CpTL" );//copyToLayer
executeAction( idCpTL, undefined, DialogModes.NO );
}


// 设置内阴影
function setInnerShadow(innerShadowOpt){
// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc8 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idLefx = charIDToTypeID( "Lefx" );
        ref2.putProperty( idPrpr, idLefx );
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref2.putEnumerated( idLyr, idOrdn, idTrgt );
    desc8.putReference( idnull, ref2 );
    var idT = charIDToTypeID( "T   " );
        var desc9 = new ActionDescriptor();
        var idScl = charIDToTypeID( "Scl " );
        var idPrc = charIDToTypeID( "#Prc" );
        desc9.putUnitDouble( idScl, idPrc, 100.000000 );
        var idIrSh = charIDToTypeID( "IrSh" );
            var desc10 = new ActionDescriptor();
            var idenab = charIDToTypeID( "enab" );
            desc10.putBoolean( idenab, true );
            var idpresent = stringIDToTypeID( "present" );
            desc10.putBoolean( idpresent, true );
            var idshowInDialog = stringIDToTypeID( "showInDialog" );
            desc10.putBoolean( idshowInDialog, true );
            var idMd = charIDToTypeID( "Md  " );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idMltp = charIDToTypeID( "Mltp" );
            desc10.putEnumerated( idMd, idBlnM, idMltp );
            var idClr = charIDToTypeID( "Clr " );
                var desc11 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc11.putDouble( idRd, 0.000000 );
                var idGrn = charIDToTypeID( "Grn " );
                desc11.putDouble( idGrn, 0.000000 );
                var idBl = charIDToTypeID( "Bl  " );
                desc11.putDouble( idBl, 0.000000 );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc10.putObject( idClr, idRGBC, desc11 );
            var idOpct = charIDToTypeID( "Opct" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc10.putUnitDouble( idOpct, idPrc, innerShadowOpt.opacity );
            var iduglg = charIDToTypeID( "uglg" );
            desc10.putBoolean( iduglg, true );
            var idlagl = charIDToTypeID( "lagl" );
            var idAng = charIDToTypeID( "#Ang" );
            desc10.putUnitDouble( idlagl, idAng, 90.000000 );
            var idDstn = charIDToTypeID( "Dstn" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc10.putUnitDouble( idDstn, idPxl,innerShadowOpt.distance );
            var idCkmt = charIDToTypeID( "Ckmt" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc10.putUnitDouble( idCkmt, idPxl,innerShadowOpt.choke );
            var idblur = charIDToTypeID( "blur" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc10.putUnitDouble( idblur, idPxl, innerShadowOpt.size );
            var idNose = charIDToTypeID( "Nose" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc10.putUnitDouble( idNose, idPrc, 0.000000 );
            var idAntA = charIDToTypeID( "AntA" );
            desc10.putBoolean( idAntA, false );
            var idTrnS = charIDToTypeID( "TrnS" );
                var desc12 = new ActionDescriptor();
                var idNm = charIDToTypeID( "Nm  " );
                desc12.putString( idNm, "Linear" );//"Linear"
            var idShpC = charIDToTypeID( "ShpC" );
            desc10.putObject( idTrnS, idShpC, desc12 );
        var idIrSh = charIDToTypeID( "IrSh" );
        desc9.putObject( idIrSh, idIrSh, desc10 );
    var idLefx = charIDToTypeID( "Lefx" );
    desc8.putObject( idT, idLefx, desc9 );
executeAction( idsetd, desc8, DialogModes.NO );

  /*
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
*/
}

//--run
/*
//fillpattern()
setCircleShapeSelection(shape,nextLayerId)
CtrlJ()
setInnerShadow(innerShadowOpt)
*/
fillpattern()

var lenX =5
var lenY =5
var nextLayerId=2;
for (var i=0;i<lenY;i++){
  shape.pos.y=(100*i)
  for (var j=0;j<lenX;j++){
    shape.pos.x=(100*j)
    setCircleShapeSelection(shape,nextLayerId)
    nextLayerId=nextLayerId+1
    CtrlJ()
    setInnerShadow(innerShadowOpt)
  }
}
