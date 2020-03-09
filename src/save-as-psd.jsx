//保存.psd
// =======================================================
var idsave = charIDToTypeID( "save" );
    var desc722 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
        var desc723 = new ActionDescriptor();
        var idmaximizeCompatibility = stringIDToTypeID( "maximizeCompatibility" );
        desc723.putBoolean( idmaximizeCompatibility, true );
    var idPhtthree = charIDToTypeID( "Pht3" );
    desc722.putObject( idAs, idPhtthree, desc723 );
    var idIn = charIDToTypeID( "In  " );
    desc722.putPath( idIn, new File( "C:\\Users\\Administrator\\Desktop\\test.psd" ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc722.putInteger( idDocI, 2247 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc722.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
executeAction( idsave, desc722, DialogModes.NO );
