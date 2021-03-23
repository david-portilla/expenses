"use strict";
var bAdd = document.querySelector("#bAdd");
var inputTitle = document.querySelector("#title");
var inputCost = document.querySelector("#cost");
var inputCurrency = document.querySelector("#currency");
var expenses = new Expenses("USD");
render();
bAdd === null || bAdd === void 0 ? void 0 : bAdd.addEventListener("click", function (e) {
    if (inputTitle.value !== "" &&
        inputCost.value !== "" &&
        !isNaN(parseFloat(inputCost.value))) {
        var title = inputTitle.value;
        var cost = parseFloat(inputCost.value);
        var currency = inputCurrency.value;
        expenses.add({
            title: title,
            cost: { number: cost, currency: currency },
        });
        render();
    }
    else {
        alert("All data is needed");
    }
});
function render() {
    var html = "";
    expenses.getItems().forEach(function (item) {
        var id = item.id, title = item.title, cost = item.cost;
        var number = cost.number, currency = cost.currency;
        html += "\n    <div class=\"item\">\n      <div>\n        <span class=\"currency\">" + currency + "</span>" + number + "\n      </div>\n      <div>" + title + "</div>\n      <div>\n        <button class=\"bRemove\" data-id=\"" + id + "\">Remove</button>\n      </div>\n    </div>\n    ";
    });
    $("#items").innerHTML = html;
    $("#display").textContent = expenses.getTotal();
    $$(".bRemove").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var id = e.target.getAttribute("data-id");
            expenses.remove(parseInt(id));
            render();
        });
    });
}
function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
