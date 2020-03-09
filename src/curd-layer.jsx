#target photoshop

//切换图层
// 选中图层Layer 1，并激活
// =======================================================
var idslct = charIDToTypeID( "slct" );//select
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );//layer
        ref1.putName( idLyr, "Layer 1" );//图层 Layer 1
    desc3.putReference( idnull, ref1 );
    var idMkVs = charIDToTypeID( "MkVs" );//makeVisible
    desc3.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );//layerID
        var list1 = new ActionList();
        list1.putInteger( 2 );
    desc3.putList( idLyrI, list1 );
executeAction( idslct, desc3, DialogModes.NO );
/*
// 选中图层Holle World!，并激活
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref2.putName( idLyr, "Holle World!" );//图层 Holle World!
    desc4.putReference( idnull, ref2 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc4.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );
        var list2 = new ActionList();
        list2.putInteger( 4 );
    desc4.putList( idLyrI, list2 );
executeAction( idslct, desc4, DialogModes.NO );
*/
//question:困惑
// list2.putInteger( 4 );?
// list1.putInteger( 2 );


// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc428 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref73 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref73.putName( idLyr, "Layer 4" );
    desc428.putReference( idnull, ref73 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc428.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );
        var list90 = new ActionList();
        list90.putInteger( 5 );
    desc428.putList( idLyrI, list90 );
executeAction( idslct, desc428, DialogModes.NO );

// 复制图层
// =======================================================
var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
    var desc429 = new ActionDescriptor();
    var idcommandID = stringIDToTypeID( "commandID" );
    desc429.putInteger( idcommandID, 104 );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc429.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idinvokeCommand, desc429, DialogModes.NO );

// =======================================================
var idcopy = charIDToTypeID( "copy" );
executeAction( idcopy, undefined, DialogModes.NO );

// 粘贴图层
// =======================================================
var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
    var desc430 = new ActionDescriptor();
    var idcommandID = stringIDToTypeID( "commandID" );
    desc430.putInteger( idcommandID, 105 );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc430.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idinvokeCommand, desc430, DialogModes.NO );

// =======================================================
var idpast = charIDToTypeID( "past" );
executeAction( idpast, undefined, DialogModes.NO );

// =======================================================
var idDplc = charIDToTypeID( "Dplc" );
    var desc431 = new ActionDescriptor();
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc431.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc431.putBoolean( idforceNotify, true );
    var idnull = charIDToTypeID( "null" );
        var ref74 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref74.putName( idLyr, "Layer 4" );
    desc431.putReference( idnull, ref74 );
    //哪个文档
    var idT = charIDToTypeID( "T   " );
        var ref75 = new ActionReference();
        var idDcmn = charIDToTypeID( "Dcmn" );
        ref75.putName( idDcmn, "a simpe icon with fontawsome" );
    desc431.putReference( idT, ref75 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc431.putInteger( idVrsn, 5 );
    var idIdnt = charIDToTypeID( "Idnt" );
        var list91 = new ActionList();
        list91.putInteger( 6 );
    desc431.putList( idIdnt, list91 );
executeAction( idDplc, desc431, DialogModes.NO );

// 删除图层
// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
    var desc433 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref76 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref76.putEnumerated( idLyr, idOrdn, idTrgt );
    desc433.putReference( idnull, ref76 );
    var idLyrI = charIDToTypeID( "LyrI" );
        var list92 = new ActionList();
        list92.putInteger( 6 );//？
    desc433.putList( idLyrI, list92 );
executeAction( idDlt, desc433, DialogModes.NO );
