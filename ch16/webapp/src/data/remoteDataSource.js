"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.RemoteDataSource = void 0;
var abstractDataSource_1 = require("./abstractDataSource");
var axios_1 = require("axios");
var protocol = "http";
var hostname = "localhost";
var port = 4600;
var urls = {
    products: protocol + "://" + hostname + ":" + port + "/products",
    orders: protocol + "://" + hostname + ":" + port + "/orders"
};
var RemoteDataSource = /** @class */ (function (_super) {
    __extends(RemoteDataSource, _super);
    function RemoteDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoteDataSource.prototype.loadProducts = function () {
        return axios_1["default"].get(urls.products).then(function (response) { return response.data; });
    };
    RemoteDataSource.prototype.storeOrder = function () {
        var orderData = {
            lines: __spreadArray([], this.order.orderLines.values()).map(function (ol) { return ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }); })
        };
        return axios_1["default"].post(urls.orders, orderData).then(function (response) { return response.data.id; });
    };
    return RemoteDataSource;
}(abstractDataSource_1.AbstractDataSource));
exports.RemoteDataSource = RemoteDataSource;
