import Cesium from 'Cesium';
import {PolylineAttackLinkMaterialProperty} from './MaterialProperty/PolylineAttackLinkMaterialProperty';
import {PolylineArrowLinkMaterialProperty} from './MaterialProperty/PolylineArrowLinkMaterialProperty';
import linkMaterail from './shaders/linkMaterail.glsl';
import {util} from '../Core/util';

var Color = Cesium.Color;
var ShaderSource = Cesium.ShaderSource;
var Material = Cesium.Material;
var baseUrl = util.getBaseUrl();

Material.PolylineAttackLinkType = 'PolylineAttackLink';
Material.PolylineAttackLinkImage = baseUrl + 'Textures/DotTransparent.png';
Material._materialCache.addMaterial(Material.PolylineAttackLinkType, {
    fabric: {
        type: Material.PolylineAttackLinkType,
        uniforms: {
            color: new Color(1, 0, 0, 1.0),
            image: Material.PolylineAttackLinkImage,
            time: 0,
        },
        source: linkMaterail
    },
    translucent: function () {
        return true;
    }
});

Material.PolylineArrowLinkType = 'PolylineArrowLink';
Material.PolylineArrowLinkImage = baseUrl + 'Textures/ArrowOpacity.png';
Material._materialCache.addMaterial(Material.PolylineArrowLinkType, {
    fabric: {
        type: Material.PolylineArrowLinkType,
        uniforms: {
            color: new Color(1, 0, 0, 1.0),
            image: Material.PolylineArrowLinkImage,
            time: 0,
        },
        source: linkMaterail
    },
    translucent: function () {
        return true;
    }
});


Cesium.PolylineAttackLinkMaterialProperty = PolylineAttackLinkMaterialProperty;
Cesium.PolylineArrowLinkMaterialProperty = PolylineArrowLinkMaterialProperty;
