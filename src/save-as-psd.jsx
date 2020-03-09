//保存.psd
#target photoshop

#include config.jsx

FILE=SCREENSHOT_PATH+"\\"+FILE_NAME+".psd";
/*
// =======================================================
var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
    var desc4 = new ActionDescriptor();
    var idcommandID = stringIDToTypeID( "commandID" );
    desc4.putInteger( idcommandID, 30 );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc4.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idinvokeCommand, desc4, DialogModes.NO );

// =======================================================
var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
    var desc5 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc5.putInteger( idLvl, 1 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var identer = stringIDToTypeID( "enter" );
    desc5.putEnumerated( idStte, idStte, identer );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc5.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idmodalStateChanged, desc5, DialogModes.NO );

// =======================================================
var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
    var desc6 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc6.putInteger( idLvl, 0 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var idexit = stringIDToTypeID( "exit" );
    desc6.putEnumerated( idStte, idStte, idexit );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc6.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idmodalStateChanged, desc6, DialogModes.NO );

// =======================================================
var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
    var desc7 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc7.putInteger( idLvl, 1 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var identer = stringIDToTypeID( "enter" );
    desc7.putEnumerated( idStte, idStte, identer );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc7.putBoolean( idkcanDispatchWhileModal, true );
    var idTtl = charIDToTypeID( "Ttl " );
    desc7.putString( idTtl, "Photoshop Format Options" );
executeAction( idmodalStateChanged, desc7, DialogModes.NO );

// =======================================================
var idmodalStateChanged = stringIDToTypeID( "modalStateChanged" );
    var desc8 = new ActionDescriptor();
    var idLvl = charIDToTypeID( "Lvl " );
    desc8.putInteger( idLvl, 0 );
    var idStte = charIDToTypeID( "Stte" );
    var idStte = charIDToTypeID( "Stte" );
    var idexit = stringIDToTypeID( "exit" );
    desc8.putEnumerated( idStte, idStte, idexit );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc8.putBoolean( idkcanDispatchWhileModal, true );
    var idTtl = charIDToTypeID( "Ttl " );
    desc8.putString( idTtl, "Photoshop Format Options" );
executeAction( idmodalStateChanged, desc8, DialogModes.NO );

// =======================================================
var idsave = charIDToTypeID( "save" );
    var desc9 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc10 = new ActionDescriptor();
        var idmaximizeCompatibility = stringIDToTypeID( "maximizeCompatibility" );
        desc10.putBoolean( idmaximizeCompatibility, true );
    var idPhtthree = charIDToTypeID( "Pht3" );
    desc9.putObject( idAs, idPhtthree, desc10 );
    var idIn = charIDToTypeID( "In  " );
    desc9.putPath( idIn, new File( FILE ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc9.putInteger( idDocI, 219 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveBegin = stringIDToTypeID( "saveBegin" );
    desc9.putEnumerated( idsaveStage, idsaveStageType, idsaveBegin );
executeAction( idsave, desc9, DialogModes.NO );

// =======================================================
var idsave = charIDToTypeID( "save" );
    var desc11 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc12 = new ActionDescriptor();
        var idmaximizeCompatibility = stringIDToTypeID( "maximizeCompatibility" );
        desc12.putBoolean( idmaximizeCompatibility, true );
    var idPhtthree = charIDToTypeID( "Pht3" );
    desc11.putObject( idAs, idPhtthree, desc12 );
    var idIn = charIDToTypeID( "In  " );
    desc11.putPath( idIn, new File(FILE ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc11.putInteger( idDocI, 219 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc11.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
executeAction( idsave, desc11, DialogModes.NO );

// =======================================================
var idMRUFileListChanged = stringIDToTypeID( "MRUFileListChanged" );
    var desc13 = new ActionDescriptor();
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc13.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc13.putBoolean( idforceNotify, true );
executeAction( idMRUFileListChanged, desc13, DialogModes.NO );

// =======================================================
var idbackgroundSaveCompleted = stringIDToTypeID( "backgroundSaveCompleted" );
    var desc14 = new ActionDescriptor();
    var idDocI = charIDToTypeID( "DocI" );
    desc14.putInteger( idDocI, 219 );
    var idsaveScheduleMode = stringIDToTypeID( "saveScheduleMode" );
    desc14.putString( idsaveScheduleMode, "auto" );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc14.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc14.putBoolean( idforceNotify, true );
executeAction( idbackgroundSaveCompleted, desc14, DialogModes.NO );
*/

// =======================================================
var idinvokeCommand = stringIDToTypeID( "invokeCommand" );
    var desc19 = new ActionDescriptor();
    var idcommandID = stringIDToTypeID( "commandID" );
    desc19.putInteger( idcommandID, 33 );
    var idkcanDispatchWhileModal = stringIDToTypeID( "kcanDispatchWhileModal" );
    desc19.putBoolean( idkcanDispatchWhileModal, true );
executeAction( idinvokeCommand, desc19, DialogModes.NO );

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

// =======================================================
var idMRUFileListChanged = stringIDToTypeID( "MRUFileListChanged" );
    var desc26 = new ActionDescriptor();
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc26.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc26.putBoolean( idforceNotify, true );
executeAction( idMRUFileListChanged, desc26, DialogModes.NO );

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

