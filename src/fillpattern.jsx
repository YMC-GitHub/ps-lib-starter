#target photoshop

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
        desc42.putString( idNm, """Water—Clear""" );
        var idIdnt = charIDToTypeID( "Idnt" );//ID
        desc42.putString( idIdnt, """58046fe2-ea73-c447-ba3c-66607cc3d179""" );
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

fillpattern()
