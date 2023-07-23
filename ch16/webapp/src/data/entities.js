"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.Order = exports.OrderLine = void 0;
var OrderLine = /** @class */ (function () {
    function OrderLine(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        // no statements required
    }
    Object.defineProperty(OrderLine.prototype, "total", {
        get: function () {
            return this.product.price * this.quantity;
        },
        enumerable: false,
        configurable: true
    });
    return OrderLine;
}());
exports.OrderLine = OrderLine;
var Order = /** @class */ (function () {
    function Order(initialLines) {
        var _this = this;
        this.lines = new Map();
        if (initialLines) {
            initialLines.forEach(function (ol) { return _this.lines.set(ol.product.id, ol); });
        }
    }
    Order.prototype.addProduct = function (prod, quantity) {
        if (this.lines.has(prod.id)) {
            if (quantity == 0) {
                this.removeProduct(prod.id);
            }
            else {
                this.lines.get(prod.id).quantity += quantity;
            }
        }
        else {
            this.lines.set(prod.id, new OrderLine(prod, quantity));
        }
    };
    Order.prototype.removeProduct = function (id) {
        this.lines["delete"](id);
    };
    Object.defineProperty(Order.prototype, "orderLines", {
        get: function () {
            return __spreadArray([], this.lines.values());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "productCount", {
        get: function () {
            return __spreadArray([], this.lines.values()).reduce(function (total, ol) { return total += ol.quantity; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "total", {
        get: function () {
            return __spreadArray([], this.lines.values()).reduce(function (total, ol) { return total += ol.total; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Order;
}());
exports.Order = Order;
