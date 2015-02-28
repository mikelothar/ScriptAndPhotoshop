function gradientSelection(x1,x2,x3,x4,y1,y2,y3,y4){
    var bottomX = Math.floor(Math.abs((x1+x2)/2));
    var topX = Math.abs((x3+x4)/2);
    var bottomY = Math.abs((y1+y2)/2);
    var topY = Math.abs((y3+y4)/2);
    var idGrdn = charIDToTypeID( "Grdn" );
    var desc472 = new ActionDescriptor();
    var idFrom = charIDToTypeID( "From" );
    var desc473 = new ActionDescriptor();
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc473.putUnitDouble( idHrzn, idPxl, bottomX );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc473.putUnitDouble( idVrtc, idPxl, bottomY );
    var idPnt = charIDToTypeID( "Pnt " );
    desc472.putObject( idFrom, idPnt, desc473 );
    var idT = charIDToTypeID( "T   " );
    var desc474 = new ActionDescriptor();
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc474.putUnitDouble( idHrzn, idPxl, topX );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc474.putUnitDouble( idVrtc, idPxl, topY );
    var idPnt = charIDToTypeID( "Pnt " );
    desc472.putObject( idT, idPnt, desc474 );
    var idType = charIDToTypeID( "Type" );
    var idGrdT = charIDToTypeID( "GrdT" );
    var idLnr = charIDToTypeID( "Lnr " );
    desc472.putEnumerated( idType, idGrdT, idLnr );
    var idDthr = charIDToTypeID( "Dthr" );
    desc472.putBoolean( idDthr, true );
    var idUsMs = charIDToTypeID( "UsMs" );
    desc472.putBoolean( idUsMs, true );
    var idGrad = charIDToTypeID( "Grad" );
    var desc475 = new ActionDescriptor();
    var idNm = charIDToTypeID( "Nm  " );
    desc475.putString( idNm, "$$$/DefaultGradient/ForegroundToTransparent=Foreground to Transparent" );
    var idGrdF = charIDToTypeID( "GrdF" );
    var idGrdF = charIDToTypeID( "GrdF" );
    var idCstS = charIDToTypeID( "CstS" );
    desc475.putEnumerated( idGrdF, idGrdF, idCstS );
    var idIntr = charIDToTypeID( "Intr" );
    desc475.putDouble( idIntr, 4096.000000 );
    var idClrs = charIDToTypeID( "Clrs" );
    var list69 = new ActionList();
    var desc476 = new ActionDescriptor();
    var idType = charIDToTypeID( "Type" );
    var idClry = charIDToTypeID( "Clry" );
    var idFrgC = charIDToTypeID( "FrgC" );
    desc476.putEnumerated( idType, idClry, idFrgC );
    var idLctn = charIDToTypeID( "Lctn" );
    desc476.putInteger( idLctn, 0 );
    var idMdpn = charIDToTypeID( "Mdpn" );
    desc476.putInteger( idMdpn, 50 );
    var idClrt = charIDToTypeID( "Clrt" );
    list69.putObject( idClrt, desc476 );
    var desc477 = new ActionDescriptor();
    var idType = charIDToTypeID( "Type" );
    var idClry = charIDToTypeID( "Clry" );
    var idFrgC = charIDToTypeID( "FrgC" );
    desc477.putEnumerated( idType, idClry, idFrgC );
    var idLctn = charIDToTypeID( "Lctn" );
    desc477.putInteger( idLctn, 4096 );
    var idMdpn = charIDToTypeID( "Mdpn" );
    desc477.putInteger( idMdpn, 50 );
    var idClrt = charIDToTypeID( "Clrt" );
    list69.putObject( idClrt, desc477 );
    desc475.putList( idClrs, list69 );
    var idTrns = charIDToTypeID( "Trns" );
    var list70 = new ActionList();
    var desc478 = new ActionDescriptor();
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc478.putUnitDouble( idOpct, idPrc, 100.000000 );
    var idLctn = charIDToTypeID( "Lctn" );
    desc478.putInteger( idLctn, 0 );
    var idMdpn = charIDToTypeID( "Mdpn" );
    desc478.putInteger( idMdpn, 50 );
    var idTrnS = charIDToTypeID( "TrnS" );
    list70.putObject( idTrnS, desc478 );
    var desc479 = new ActionDescriptor();
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc479.putUnitDouble( idOpct, idPrc, 0.000000 );
    var idLctn = charIDToTypeID( "Lctn" );
    desc479.putInteger( idLctn, 4096 );
    var idMdpn = charIDToTypeID( "Mdpn" );
    desc479.putInteger( idMdpn, 50 );
    var idTrnS = charIDToTypeID( "TrnS" );
    list70.putObject( idTrnS, desc479 );
    desc475.putList( idTrns, list70 );
    var idGrdn = charIDToTypeID( "Grdn" );
    desc472.putObject( idGrad, idGrdn, desc475 );
    executeAction( idGrdn, desc472, DialogModes.NO );
}