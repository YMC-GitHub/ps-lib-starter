//选中-移动工具
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc20 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref7 = new ActionReference();
        var idmoveTool = stringIDToTypeID( "moveTool" );//moveTool
        ref7.putClass( idmoveTool );
    desc20.putReference( idnull, ref7 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc20.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc20.putBoolean( idforceNotify, true );
executeAction( idslct, desc20, DialogModes.NO );
//选中-artboardTool
// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc21 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref8 = new ActionReference();
        var idartboardTool = stringIDToTypeID( "artboardTool" );//artboardTool
        ref8.putClass( idartboardTool );
    desc21.putReference( idnull, ref8 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc21.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc21.putBoolean( idforceNotify, true );
executeAction( idslct, desc21, DialogModes.NO );
//选中-选区工具
var idtoolModalStateChanged = stringIDToTypeID( "toolModalStateChanged" );
    var desc8 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc8.putInteger( idLvl, 1 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var identer = stringIDToTypeID( "enter" );
    desc8.putEnumerated( idStte, idStte, identer );
    var idTool = charIDToTypeID( "Tool" );
        var desc9 = new ActionDescriptor();
        var idIdnt = charIDToTypeID( "Idnt" );
        desc9.putString( idIdnt, "elmt" );//
        var idTtl = charIDToTypeID( "Ttl " );
        desc9.putString( idTtl, "Elliptical Marquee Tool" );
    var idTool = charIDToTypeID( "Tool" );
    desc8.putObject( idTool, idTool, desc9 );
    var idKnd = charIDToTypeID( "Knd " );
    var idKnd = charIDToTypeID( "Knd " );
    var idmouse = stringIDToTypeID( "mouse" );
    desc8.putEnumerated( idKnd, idKnd, idmouse );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc8.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idtoolModalStateChanged, desc8, DialogModes.NO );

// =======================================================
var idtoolModalStateChanged = stringIDToTypeID( "toolModalStateChanged" );
    var desc10 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc10.putInteger( idLvl, 0 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var idexit = stringIDToTypeID( "exit" );
    desc10.putEnumerated( idStte, idStte, idexit );
    var idTool = charIDToTypeID( "Tool" );
        var desc11 = new ActionDescriptor();
        var idIdnt = charIDToTypeID( "Idnt" );
        desc11.putString( idIdnt, "elmt" );
        var idTtl = charIDToTypeID( "Ttl " );
        desc11.putString( idTtl, "Elliptical Marquee Tool" );
    var idTool = charIDToTypeID( "Tool" );
    desc10.putObject( idTool, idTool, desc11 );
    var idKnd = charIDToTypeID( "Knd " );
    var idKnd = charIDToTypeID( "Knd " );
    var idmouse = stringIDToTypeID( "mouse" );
    desc10.putEnumerated( idKnd, idKnd, idmouse );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc10.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idtoolModalStateChanged, desc10, DialogModes.NO );
