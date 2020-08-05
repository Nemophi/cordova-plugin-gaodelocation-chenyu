var exec = require('cordova/exec');

var GaoDe = {
    getCurrentPosition: function(successFn, errorFn, option) {
        exec(successFn, errorFn, 'GaoDeLocation', 'getCurrentPosition', [option]);
    },
    startSerialLocation: function(successFn, errorFn, option) {
        exec(successFn, errorFn, 'GaoDeLocation', 'startSerialLocation', [option]);
    },
    stopSerialLocation: function(successFn, errorFn) {
        exec(successFn, errorFn, 'GaoDeLocation', 'stopSerialLocation', []);
    },
    pathOptimize:function (successFn, errorFn, option) {
        exec(successFn, errorFn, 'GaoDeLocation', 'pathOptimize', [option]);
    },
    kalmanFilterPath:function (successFn, errorFn, option) {
        exec(successFn, errorFn, 'GaoDeLocation', 'kalmanFilterPath', [option]);
    },
    removeNoisePoint:function (successFn, errorFn, option) {
        exec(successFn, errorFn, 'GaoDeLocation', 'removeNoisePoint', [option]);
    },
    kalmanFilterPoint: function(successFn, errorFn, option) {
        exec(successFn, errorFn, 'GaoDeLocation', 'kalmanFilterPoint', [option]);
    },
    reducerVerticalThreshold: function(successFn, errorFn, option) {
        exec(successFn, errorFn, 'GaoDeLocation', 'reducerVerticalThreshold', [option]);
    }
};

module.exports = GaoDe;
