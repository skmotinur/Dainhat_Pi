var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DAINHAT_UTM_1 = new ol.format.GeoJSON();
var features_DAINHAT_UTM_1 = format_DAINHAT_UTM_1.readFeatures(json_DAINHAT_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAINHAT_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAINHAT_UTM_1.addFeatures(features_DAINHAT_UTM_1);
var lyr_DAINHAT_UTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAINHAT_UTM_1, 
                style: style_DAINHAT_UTM_1,
                popuplayertitle: "DAINHAT_UTM",
                interactive: true,
    title: 'DAINHAT_UTM<br />\
    <img src="styles/legend/DAINHAT_UTM_1_0.png" /> 2.8 - 6<br />\
    <img src="styles/legend/DAINHAT_UTM_1_1.png" /> 6 - 9.2<br />\
    <img src="styles/legend/DAINHAT_UTM_1_2.png" /> 9.2 - 13.1<br />\
    <img src="styles/legend/DAINHAT_UTM_1_3.png" /> 13.1 - 15.8<br />\
    <img src="styles/legend/DAINHAT_UTM_1_4.png" /> 15.8 - 19.8<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_DAINHAT_UTM_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_DAINHAT_UTM_1];
lyr_DAINHAT_UTM_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'WARD_NO_': 'Ward no.:', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ward_area': 'ward_area', 'Integrate': 'Integrate', 'BiPnorm': 'BiPnorm', 'cyclometri': 'cyclometri', 'beta': 'beta', 'gam': 'gam', 'eta': 'Eta value:', 'pie': 'Pi value:', 'neywork_st': 'neywork_st', });
lyr_DAINHAT_UTM_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'WARD_NO_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ward_area': 'TextEdit', 'Integrate': 'TextEdit', 'BiPnorm': 'TextEdit', 'cyclometri': 'TextEdit', 'beta': 'TextEdit', 'gam': 'TextEdit', 'eta': 'TextEdit', 'pie': 'TextEdit', 'neywork_st': 'TextEdit', });
lyr_DAINHAT_UTM_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'WARD_NO_': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ward_area': 'hidden field', 'Integrate': 'hidden field', 'BiPnorm': 'hidden field', 'cyclometri': 'hidden field', 'beta': 'hidden field', 'gam': 'hidden field', 'eta': 'hidden field', 'pie': 'inline label - always visible', 'neywork_st': 'hidden field', });
lyr_DAINHAT_UTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});