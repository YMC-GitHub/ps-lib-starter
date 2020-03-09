//保存.psd
#target photoshop

#include config.jsx

FILE=DIST_PATH+"\\"+FILE_NAME+".psd";
//alert(FILE)
//$.writeln("file:"+FILE)
//alert("step00:")
/*
// =======================================================
var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
    var desc19 = new ActionDescriptor();
    var idcommandID = stringIDToTypeID( "commandID" );
    desc19.putInteger( idcommandID, 33 );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc19.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idinvokeCommand, desc19, DialogModes.NO );
alert("step01:")
*/
/*
// =======================================================
var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
    var desc20 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc20.putInteger( idLvl, 1 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var identer = stringIDToTypeID( "enter" );
    desc20.putEnumerated( idStte, idStte, identer );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc20.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idmodalStateChanged, desc20, DialogModes.NO );
alert("step01:")

// =======================================================
var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
    var desc21 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc21.putInteger( idLvl, 0 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var idexit = stringIDToTypeID( "exit" );
    desc21.putEnumerated( idStte, idStte, idexit );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc21.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idmodalStateChanged, desc21, DialogModes.NO );
*/
// =======================================================
var idsave = charIDToTypeID( "save" );
    var desc22 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc23 = new ActionDescriptor();
        var idmaximizeCompatibility = stringIDToTypeID( "maximizeCompatibility" );
        desc23.putBoolean( idmaximizeCompatibility, true );
    var idPhtthree = charIDToTypeID( "Pht3" );
    desc22.putObject( idAs, idPhtthree, desc23 );
    var idIn = charIDToTypeID( "In  " );
    desc22.putPath( idIn, new File( FILE) );
    var idDocI = charIDToTypeID( "DocI" );
    desc22.putInteger( idDocI, 219 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveBegin = stringIDToTypeID( "saveBegin" );
    desc22.putEnumerated( idsaveStage, idsaveStageType, idsaveBegin );
executeAction( idsave, desc22, DialogModes.NO );
//alert("step02:")
/*
// =======================================================
var idsave = charIDToTypeID( "save" );
    var desc24 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc25 = new ActionDescriptor();
        var idmaximizeCompatibility = stringIDToTypeID( "maximizeCompatibility" );
        desc25.putBoolean( idmaximizeCompatibility, true );
    var idPhtthree = charIDToTypeID( "Pht3" );
    desc24.putObject( idAs, idPhtthree, desc25 );
    var idIn = charIDToTypeID( "In  " );
    desc24.putPath( idIn, new File( FILE) );
    var idDocI = charIDToTypeID( "DocI" );
    desc24.putInteger( idDocI, 219 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc24.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
executeAction( idsave, desc24, DialogModes.NO );
//alert("step03:ok")
*/
/*
// =======================================================
var idMRUFileListChanged = stringIDToTypeID( "MRUFileListChanged" );
    var desc26 = new ActionDescriptor();
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc26.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc26.putBoolean( idforceNotify, true );
executeAction( idMRUFileListChanged, desc26, DialogModes.NO );
alert("step04:")
// =======================================================
var idbackgroundSaveCompleted = stringIDToTypeID( "backgroundSaveCompleted" );
    var desc27 = new ActionDescriptor();
    var idDocI = charIDToTypeID( "DocI" );
    desc27.putInteger( idDocI, 219 );
    var idsaveScheduleMode = stringIDToTypeID( "saveScheduleMode" );
    desc27.putString( idsaveScheduleMode, "auto" );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc27.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc27.putBoolean( idforceNotify, true );
executeAction( idbackgroundSaveCompleted, desc27, DialogModes.NO );

alert("step05:")
*/
