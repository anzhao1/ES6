"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

[].concat(_toConsumableArray(document.querySelectorAll("li"))).find(function (x, y) {
    x['onclick'] = function () {
        [].concat(_toConsumableArray(document.querySelectorAll("div"))).find(function (a) {
            a.style.display = "none";
        });
        [].concat(_toConsumableArray(document.querySelectorAll("div")))[y].style.display = "block";
    };
});