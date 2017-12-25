import Cesium from 'Cesium';
export * from './Material/Material';

import {getLinkedPointList} from './Core/getLinkedPointList';
Cesium.getLinkedPointList = getLinkedPointList;

Cesium.Appearance.prototype.getRenderState = function () {
    var translucent = this.isTranslucent();
    var rs = clone(this.renderState, false);
    if (translucent) {
        rs.depthMask = false;
        //rs.blending = BlendingState.ALPHA_BLEND;
    } else {
        rs.depthMask = true;
    }
    return rs;
};
