#target photoshop
function selectLayerByIdAndName(id,name){
  var idslct = charIDToTypeID( "slct" );
    var desc42 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref3.putName( idLyr, name );//"Layer 1"
    desc42.putReference( idnull, ref3 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc42.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );
        var list3 = new ActionList();
        list3.putInteger( id );//2
    desc42.putList( idLyrI, list3 );
executeAction( idslct, desc42, DialogModes.NO );
}
function deleteLayerById(id){
  var idDlt = charIDToTypeID( "Dlt " );
  var desc36 = new ActionDescriptor();
  var idnull = charIDToTypeID( "null" );
      var ref2 = new ActionReference();
      var idLyr = charIDToTypeID( "Lyr " );
      var idOrdn = charIDToTypeID( "Ordn" );
      var idTrgt = charIDToTypeID( "Trgt" );
      ref2.putEnumerated( idLyr, idOrdn, idTrgt );
  desc36.putReference( idnull, ref2 );
  var idLyrI = charIDToTypeID( "LyrI" );
      var list2 = new ActionList();
      list2.putInteger( id );
  desc36.putList( idLyrI, list2 );
executeAction( idDlt, desc36, DialogModes.NO );
}
// select layer 1
selectLayerByIdAndName(2,"Layer 1");
// delete layer 1
deleteLayerById(2);
