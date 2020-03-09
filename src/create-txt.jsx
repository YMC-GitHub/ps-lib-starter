#target photoshop

#include config.jsx
#include data.txt.jsx

// 创建文字

function addText(txtOpt){
  // 创建图层
var newLayer = app.activeDocument.artLayers.add();

// 创建文字
// 修改图层：图层转换为文本图层
newLayer.kind = LayerKind.TEXT
// 文本类型
newLayer.textItem.kind = TextType.PARAGRAPHTEXT
// 文本宽高
//newLayer.textItem.width = UnitValue("300 px")
//newLayer.textItem.height = UnitValue("150 px")
newLayer.textItem.width = UnitValue(txtOpt.area.w)
newLayer.textItem.height = UnitValue(txtOpt.area.w)
// 文本位置
//newLayer.textItem.position= [UnitValue("50px"), UnitValue("100px")]
newLayer.textItem.position= [UnitValue(txtOpt.pos.x), UnitValue(txtOpt.pos.y)]
// 文本大小
newLayer.textItem.size = UnitValue(txtOpt.size)
// 文本字体
//newLayer.textItem.font ="STFangsong";//ok
newLayer.textItem.font =txtOpt.font
// 文本内容
//newLayer.textItem.contents= "hello world"
newLayer.textItem.contents= txtOpt.content //\uf004
// 文本对齐
newLayer.textItem.justification = Justification.CENTER
// 文本颜色
// 创建色彩
var c = new SolidColor();
// 颜色取值
c.rgb.hexValue = "77bb11";
newLayer.textItem.color = c;
}

// 雕刻文字
function diaokeText(){
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
                desc153.putString( idNm, "Linear" );//"""Linear"""
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
}
/*
//repacle with config.jsx
var txtOpts={
  pos:{x:"0 px",y:"0 px"},
  area:{w:"100 px",h:"100 px"},
  size:"80 px",
  font:"FontAwesome",
  content:"\uf006",
}
*/
/*
var txtOpts={
  pos:{x:"200 px",y:"200 px"},
  area:{w:"100 px",h:"100 px"},
  size:"80 px",
  font:"FontAwesome",
  content:"\uf006",
}
*/
//addText(txtOpts)
//diaokeText()
// 阵列
/*
var len =1
for (var i=0;i<len;i++){
  txtOpts.pos.y=""+(100*i)+"px"
  for (var j=0;j<len;j++){
    txtOpts.pos.x=""+(100*j)+"px"
    addText(txtOpts)
    //diaokeText()
  }
}
*/
//300dpi
//40->166.67
//80->333.33
/*
var len =4
for (var i=0;i<len;i++){
  txtOpts.size=""+50*(i+1)*0.8+"px"
  txtOpts.area.w=""+50*(i+1)+"px"
  txtOpts.area.h=""+50*(i+1)+"px"
  addText(txtOpts)
}
*/
var lenX =5
var lenY =5
var index=0
for (var i=0;i<lenY;i++){
  //txtOpts.pos.y=caculateUnitValue(""+(100*i)+"px")
  txtOpts.pos.y=(""+(100*i)+"px")
  for (var j=0;j<lenX;j++){
    //txtOpts.pos.x=caculateUnitValue(""+(100*j)+"px")
    txtOpts.pos.x=(""+(100*j)+"px")
    //txtOpts.content=dataText[index];
    txtOpts.content=(dataText[index]);
    index++;
    addText(txtOpts)
    diaokeText()
  }
}
//平铺文本
function pingpu(){
  var w=str2num(restoreUnitValue(config.txtOpts.w));
  var h=str2num(restoreUnitValue(config.txtOpts.h));
  var lenX =str2num(config.size.w)/w;
  var lenY =str2num(config.size.h)/h;
  for (var i=0;i<lenY;i++){
    //txtOpts.pos.y=caculateUnitValue(""+(100*i)+"px")
    txtOpts.pos.y=(""+(w*i)+"px")
    for (var j=0;j<lenX;j++){
      //txtOpts.pos.x=caculateUnitValue(""+(100*j)+"px")
      txtOpts.pos.x=(""+(h*j)+"px")
      addText(txtOpts)
      diaokeText()
    }
  }
}
