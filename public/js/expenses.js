"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.items = [];
    }
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayList.prototype.get = function (index) {
        var item = this.items.filter(function (x, i) {
            return i === index;
        });
        return item.length === 0 ? null : item[0];
    };
    ArrayList.prototype.createFrom = function (value) {
        this.items = __spreadArray([], value);
    };
    ArrayList.prototype.getAll = function () {
        return this.items;
    };
    return ArrayList;
}());
var Expenses = /** @class */ (function () {
    function Expenses(currency) {
        this.count = 0;
        this.finalCurrency = currency;
        this.expenses = new ArrayList();
    }
    Expenses.prototype.add = function (item) {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return false;
    };
    Expenses.prototype.get = function (index) {
        return this.expenses.get(index);
    };
    Expenses.prototype.getItems = function () {
        return this.expenses.getAll();
    };
    Expenses.prototype.getTotal = function () {
        var _this = this;
        var total = this.expenses
            .getAll()
            .reduce(function (acc, item) {
            return (acc += _this.convertCurrency(item, _this.finalCurrency));
        }, 0);
        return this.finalCurrency + " $" + total.toFixed(2).toString();
    };
    Expenses.prototype.remove = function (id) {
        throw new Error("Method not implemented.");
    };
    Expenses.prototype.convertCurrency = function (item, currency) {
        switch (item.cost.currency) {
            case "USD":
                switch (currency) {
                    case "MXN":
                        return item.cost.number * 22;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            case "MXN":
                switch (currency) {
                    case "USD":
                        return item.cost.number / 22;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            default:
                return 0;
        }
    };
    return Expenses;
}());
