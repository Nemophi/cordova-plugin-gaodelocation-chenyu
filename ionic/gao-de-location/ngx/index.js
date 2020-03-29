import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var GaoDeLocation = /** @class */ (function (_super) {
    __extends(GaoDeLocation, _super);
    function GaoDeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GaoDeLocation.prototype.getCurrentPosition = function (positionOptions) { return cordova(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocation.prototype.startSerialLocation = function (positionOptions) { return cordova(this, "startSerialLocation", { "callbackOrder": "reverse", "observable": true }, arguments); };
    GaoDeLocation.prototype.stopSerialLocation = function () { return cordova(this, "stopSerialLocation", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocation.pluginName = "GaoDeLocation";
    GaoDeLocation.plugin = "cordova-plugin-gaodelocation-chenyu";
    GaoDeLocation.pluginRef = "GaoDe";
    GaoDeLocation.repo = "https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git";
    GaoDeLocation.install = "ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key";
    GaoDeLocation.installVariables = ["ANDROID_API_KEY", "IOS_API_KEY"];
    GaoDeLocation.platforms = ["Android", "iOS"];
    GaoDeLocation = __decorate([
        Injectable()
    ], GaoDeLocation);
    return GaoDeLocation;
}(IonicNativePlugin));
export { GaoDeLocation };
/**
 * ios positioning accuracy
 * https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
 */
export var DesiredAccuracyEnum;
(function (DesiredAccuracyEnum) {
    /**
     * The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBestForNavigation"] = 1] = "kCLLocationAccuracyBestForNavigation";
    /**
     * The best level of accuracy available.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBest"] = 2] = "kCLLocationAccuracyBest";
    /**
     * Accurate to within ten meters of the desired target.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyNearestTenMeters"] = 3] = "kCLLocationAccuracyNearestTenMeters";
    /**
     * Accurate to within one hundred meters.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyHundredMeters"] = 4] = "kCLLocationAccuracyHundredMeters";
    /**
     * Accurate to the nearest kilometer.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyKilometer"] = 5] = "kCLLocationAccuracyKilometer";
    /**
     * Accurate to the nearest three kilometers.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyThreeKilometers"] = 6] = "kCLLocationAccuracyThreeKilometers";
})(DesiredAccuracyEnum || (DesiredAccuracyEnum = {}));
/**
 * locationModeEnum
 */
export var LocationModeEnum;
(function (LocationModeEnum) {
    LocationModeEnum[LocationModeEnum["Hight_Accuracy"] = 1] = "Hight_Accuracy";
    LocationModeEnum[LocationModeEnum["Battery_Saving"] = 2] = "Battery_Saving";
    LocationModeEnum[LocationModeEnum["Device_Sensors"] = 3] = "Device_Sensors";
})(LocationModeEnum || (LocationModeEnum = {}));
/**
 * locationProtocolEnum
 */
export var LocationProtocolEnum;
(function (LocationProtocolEnum) {
    LocationProtocolEnum[LocationProtocolEnum["HTTP"] = 1] = "HTTP";
    LocationProtocolEnum[LocationProtocolEnum["HTTPS"] = 2] = "HTTPS";
})(LocationProtocolEnum || (LocationProtocolEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dhby1kZS1sb2NhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyw4QkFBb0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDOztJQStCRyxpQ0FBaUI7Ozs7SUFXbEQsMENBQWtCLGFBQUMsZUFBZ0M7SUFhbkQsMkNBQW1CLGFBQUMsZUFBZ0M7SUFXcEQsMENBQWtCOzs7Ozs7OztJQW5DUCxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBakMxQjtFQWlDbUMsaUJBQWlCO1NBQXZDLGFBQWE7QUF5STFCOzs7R0FHRztBQUNILE1BQU0sQ0FBTixJQUFZLG1CQXlCWDtBQXpCRCxXQUFZLG1CQUFtQjtJQUM3Qjs7T0FFRztJQUNILDZIQUF3QyxDQUFBO0lBQ3hDOztPQUVHO0lBQ0gsbUdBQTJCLENBQUE7SUFDM0I7O09BRUc7SUFDSCwySEFBdUMsQ0FBQTtJQUN2Qzs7T0FFRztJQUNILHFIQUFvQyxDQUFBO0lBQ3BDOztPQUVHO0lBQ0gsNkdBQWdDLENBQUE7SUFDaEM7O09BRUc7SUFDSCx5SEFBc0MsQ0FBQTtBQUN4QyxDQUFDLEVBekJXLG1CQUFtQixLQUFuQixtQkFBbUIsUUF5QjlCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxnQkFJWDtBQUpELFdBQVksZ0JBQWdCO0lBQzFCLDJFQUFrQixDQUFBO0lBQ2xCLDJFQUFrQixDQUFBO0lBQ2xCLDJFQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSTNCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxvQkFHWDtBQUhELFdBQVksb0JBQW9CO0lBQzlCLCtEQUFRLENBQUE7SUFDUixpRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFHL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2lufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBHYW8gRGUgTG9jYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQmVjYXVzZSB0aGUgb3JpZ2luYWwgR1BTIHBvc2l0aW9uaW5nIHVzZXMgR29vZ2xlIEJyb3dzZXIgcG9zaXRpb25pbmcsIGFuZCBHb29nbGUgd2l0aGRyYXdzIGZyb20gQ2hpbmEsIHJlc3VsdGluZyBpbiBHUFMgQW5kcm9pZCBwb3NpdGlvbmluZyBjYW4gbm90IGJlIHBvc2l0aW9uZWQuXG4gKiBHYW9kZSBsb2NhdGlvbiBjYW4gZGlyZWN0bHkgcmV0dXJuIGFkZHJlc3MgaW5mb3JtYXRpb25HYW9kZSBsb2NhdGlvbiBjYW4gZGlyZWN0bHkgcmV0dXJuIGFkZHJlc3MgaW5mb3JtYXRpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEdhb0RlTG9jYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dhby1kZS1sb2NhdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhb0RlTG9jYXRpb246IEdhb0RlTG9jYXRpb24pIHsgfVxuICpcbiAqIHRoaXMuZ2FvRGVMb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKVxuICogLnRoZW4oKHJlczogUG9zaXRpb25PcHRpb25zKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dhb0RlTG9jYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nYW9kZWxvY2F0aW9uLWNoZW55dScsXG4gIHBsdWdpblJlZjogJ0dhb0RlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS93YWxpdS9jb3Jkb3ZhLXBsdWdpbi1nYW9kZWxvY2F0aW9uLWNoZW55dS5naXQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdhb2RlbG9jYXRpb24tY2hlbnl1IC0tdmFyaWFibGUgIEFORFJPSURfQVBJX0tFWT15b3VyIGFuZHJvaWQga2V5IC0tdmFyaWFibGUgIElPU19BUElfS0VZPXlvdXIgaW9zIGtleScsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQU5EUk9JRF9BUElfS0VZJywgJ0lPU19BUElfS0VZJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdhb0RlTG9jYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaW5nbGUgbG9jYXRpb25cbiAgICogQHBhcmFtIHBvc2l0aW9uT3B0aW9uc1xuICAgKiBAcmV0dXJuIFByb21pc2U8UG9zaXRpb25SZXM+XG4gICAqL1xuICBAQ29yZG92YShcbiAgICB7XG4gICAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgfVxuICApXG4gIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbk9wdGlvbnM6IFBvc2l0aW9uT3B0aW9ucyk6IFByb21pc2U8UG9zaXRpb25SZXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgc2VyaWFsIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBwb3NpdGlvbk9wdGlvbnNcbiAgICogQHJldHVybiBQcm9taXNlPFBvc2l0aW9uUmVzPlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHN0YXJ0U2VyaWFsTG9jYXRpb24ocG9zaXRpb25PcHRpb25zOiBQb3NpdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPFBvc2l0aW9uUmVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgU2VyaWFsIExvY2F0aW9uXG4gICAqIEByZXR1cm4gUHJvbWlzZTxhbnk+XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzdG9wU2VyaWFsTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBMb2NhdGlvbiBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogYW5kcm9pZCBvcHRpb25zXG4gICAqL1xuICBhbmRyb2lkT3B0aW9uOiBBbmRyb2lkT3B0aW9ucztcbiAgLyoqXG4gICAqIGlvcyBvcHRpb25zXG4gICAqL1xuICBpb3NPcHRpb246IElvc09wdGlvbnM7XG59XG5cbi8qKlxuICogYW5kcm9pZCBwb3NpdGlvbmluZyBhY2N1cmFjeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRPcHRpb25zIHtcbiAgLyoqXG4gICAqIGxvY2F0aW9uIG1vZGVcbiAgICovXG4gIGxvY2F0aW9uTW9kZTogTG9jYXRpb25Nb2RlRW51bTtcbiAgLyoqXG4gICAqIGdwcyBmaXJzdFxuICAgKi9cbiAgZ3BzRmlyc3Q6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBIdHRwIHRpbWVPdXRcbiAgICovXG4gIEh0dHBUaW1lT3V0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBpbnRlcnZhbFxuICAgKi9cbiAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wZW4gcmV2ZXJzZSBhZGRyZXNzXG4gICAqL1xuICBuZWVkQWRkcmVzczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9uY2UgbG9jYXRpb25cbiAgICovXG4gIG9uY2VMb2NhdGlvbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9uY2UgbG9jYXRpb24gbGF0ZXN0XG4gICAqL1xuICBvbmNlTG9jYXRpb25MYXRlc3Q6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBsb2NhdGlvbiBwcm90b2NvbFxuICAgKi9cbiAgbG9jYXRpb25Qcm90b2NvbDogTG9jYXRpb25Qcm90b2NvbEVudW07XG4gIC8qKlxuICAgKiBzZW5zb3IgZW5hYmxlXG4gICAqL1xuICBzZW5zb3JFbmFibGU6IGJvb2xlYW47XG4gIC8qKlxuICAgKiB3aWZpIHNjYW5cbiAgICovXG4gIHdpZmlTY2FuOiBib29sZWFuO1xuICAvKipcbiAgICogbG9jYXRpb24gY2FjaGUgZW5hYmxlXG4gICAqL1xuICBsb2NhdGlvbkNhY2hlRW5hYmxlOiBib29sZWFuO1xufVxuXG5cbi8qKlxuICpcbiAqIElPUyBwb3NpdGlvbmluZyBwYXJhbWV0ZXJzXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElvc09wdGlvbnMge1xuICAvKipcbiAgICogZGVzaXJlZCBhY2N1cmFjeVxuICAgKi9cbiAgZGVzaXJlZEFjY3VyYWN5PzogRGVzaXJlZEFjY3VyYWN5RW51bTtcbiAgLyoqXG4gICAqIHBhdXNlcyBsb2NhdGlvbiB1cGRhdGVzIGF1dG9tYXRpY2FsbHlcbiAgICovXG4gIHBhdXNlc0xvY2F0aW9uVXBkYXRlc0F1dG9tYXRpY2FsbHk6IElvc0Jvb2xlYW47XG4gIC8qKlxuICAgKiBhbGxvd3MgYmFja2dyb3VuZCBsb2NhdGlvbiB1cGRhdGVzXG4gICAqL1xuICBhbGxvd3NCYWNrZ3JvdW5kTG9jYXRpb25VcGRhdGVzOiBJb3NCb29sZWFuO1xuICAvKipcbiAgICogbG9jYXRpb24gdGltZW91dFxuICAgKi9cbiAgbG9jYXRpb25UaW1lb3V0OiBudW1iZXI7XG4gIC8qKlxuICAgKiByZSBnZW9jb2RlIHRpbWVvdXRcbiAgICovXG4gIHJlR2VvY29kZVRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBsb2NhdGluZyB3aXRoIHJlIGdlb2NvZGVcbiAgICovXG4gIGxvY2F0aW5nV2l0aFJlR2VvY29kZT86IElvc0Jvb2xlYW47XG59XG5cbi8qKlxuICogaW9zIHBvc2l0aW9uaW5nIGFjY3VyYWN5XG4gKiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9jb3JlbG9jYXRpb24va2NsbG9jYXRpb25hY2N1cmFjeWJlc3Rmb3JuYXZpZ2F0aW9uXG4gKi9cbmV4cG9ydCBlbnVtIERlc2lyZWRBY2N1cmFjeUVudW0ge1xuICAvKipcbiAgICogVGhlIGhpZ2hlc3QgcG9zc2libGUgYWNjdXJhY3kgdGhhdCB1c2VzIGFkZGl0aW9uYWwgc2Vuc29yIGRhdGEgdG8gZmFjaWxpdGF0ZSBuYXZpZ2F0aW9uIGFwcHMuXG4gICAqL1xuICBrQ0xMb2NhdGlvbkFjY3VyYWN5QmVzdEZvck5hdmlnYXRpb24gPSAxLFxuICAvKipcbiAgICogVGhlIGJlc3QgbGV2ZWwgb2YgYWNjdXJhY3kgYXZhaWxhYmxlLlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeUJlc3QgPSAyLFxuICAvKipcbiAgICogQWNjdXJhdGUgdG8gd2l0aGluIHRlbiBtZXRlcnMgb2YgdGhlIGRlc2lyZWQgdGFyZ2V0LlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeU5lYXJlc3RUZW5NZXRlcnMgPSAzLFxuICAvKipcbiAgICogQWNjdXJhdGUgdG8gd2l0aGluIG9uZSBodW5kcmVkIG1ldGVycy5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lIdW5kcmVkTWV0ZXJzID0gNCxcbiAgLyoqXG4gICAqIEFjY3VyYXRlIHRvIHRoZSBuZWFyZXN0IGtpbG9tZXRlci5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lLaWxvbWV0ZXIgPSA1LFxuICAvKipcbiAgICogQWNjdXJhdGUgdG8gdGhlIG5lYXJlc3QgdGhyZWUga2lsb21ldGVycy5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lUaHJlZUtpbG9tZXRlcnMgPSA2XG59XG5cbi8qKlxuICogbG9jYXRpb25Nb2RlRW51bVxuICovXG5leHBvcnQgZW51bSBMb2NhdGlvbk1vZGVFbnVtIHtcbiAgSGlnaHRfQWNjdXJhY3kgPSAxLFxuICBCYXR0ZXJ5X1NhdmluZyA9IDIsXG4gIERldmljZV9TZW5zb3JzID0gMyxcbn1cblxuLyoqXG4gKiBsb2NhdGlvblByb3RvY29sRW51bVxuICovXG5leHBvcnQgZW51bSBMb2NhdGlvblByb3RvY29sRW51bSB7XG4gIEhUVFAgPSAxLFxuICBIVFRQUyA9IDJcbn1cblxuLyoqXG4gKiBpb3MgYm9vbGVhblxuICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIElvc0Jvb2xlYW4gPSAnWUVTJyB8ICdOTyc7XG5cbi8qKlxuICogUG9zaXRpb25pbmcgcmV0dXJuIHJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uUmVzIHtcbiAgLyoqXG4gICAqIFN0YXR1cyBjb2RlXG4gICAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBsYXRpdHVkZVxuICAgKi9cbiAgbGF0aXR1ZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIGxvbmdpdHVkZVxuICAgKi9cbiAgbG9uZ2l0dWRlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY2N1cmFjeVxuICAgKi9cbiAgYWNjdXJhY3k6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZHJlc3NcbiAgICovXG4gIGZvcm1hdHRlZEFkZHJlc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIGNvdW50cnlcbiAgICovXG4gIGNvdW50cnk6IHN0cmluZztcbiAgLyoqXG4gICAqIHByb3ZpbmNlXG4gICAqL1xuICBwcm92aW5jZTogc3RyaW5nO1xuICAvKipcbiAgICogY2l0eVxuICAgKi9cbiAgY2l0eTogc3RyaW5nO1xuICAvKipcbiAgICogZGlzdHJpY3RcbiAgICovXG4gIGRpc3RyaWN0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjaXR5Y29kZVxuICAgKi9cbiAgY2l0eWNvZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkY29kZVxuICAgKi9cbiAgYWRjb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdHJlZXRcbiAgICovXG4gIHN0cmVldDogc3RyaW5nO1xuICAvKipcbiAgICogU3RyZWV0IG51bWJlciBpbmZvcm1hdGlvblxuICAgKi9cbiAgbnVtYmVyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQT0kgbmFtZVxuICAgKi9cbiAgUE9JTmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogQU9JIE5hbWVcbiAgICovXG4gIEFPSU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIGFsdGl0dWRlXG4gICAqL1xuICBhbHRpdHVkZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHNwZWVkXG4gICAqL1xuICBzcGVlZD86IHN0cmluZztcbiAgLyoqXG4gICAqIGJlYXJpbmdcbiAgICovXG4gIGJlYXJpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBidWlsZGluZyBpZFxuICAgKi9cbiAgYnVpbGRpbmdJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIGZsb29yXG4gICAqL1xuICBmbG9vcj86IHN0cmluZztcbiAgLyoqXG4gICAqIGdwcyBhY2N1cmFjeSBzdGF0dXNcbiAgICovXG4gIGdwc0FjY3VyYWN5U3RhdHVzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGxvY2F0aW9uIHJlc3VsdCBzb3VyY2VcbiAgICovXG4gIGxvY2F0aW9uVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICAqIExvY2F0aW9uIGRldGFpbFxuICAgKi9cbiAgbG9jYXRpb25EZXRhaWw/OiBzdHJpbmc7XG59XG4iXX0=