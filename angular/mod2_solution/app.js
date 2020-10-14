(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyItems()

  buyList.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var buyItems = [
    { name: "cookies", quantity: 10},
    { name: "chips", quantity: 2},
    { name: "chocolates", quantity: 5},
    { name: "ice-cream", quantity: 1},
    { name: "noodles", quantity: 2}
  ];

  var boughtItems = [];

  service.buyItem = function (index) {
    var item = buyItems[index];
    boughtItems.push(item);
   buyItems.splice(index, 1);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();