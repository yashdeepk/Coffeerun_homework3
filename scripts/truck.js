(function(window) {
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function(order) {
    this.db.add(order.emailAddress, order);
  };
  Truck.prototype.deliverOrder = function(customerId) {
    this.db.remove(customerId);
  };
  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());
    customerIdArray.forEach(function(id) {
      (this.db.get(id));
    }.bind(this));
  };
  App.Truck = Truck;
  window.App = App;
})(window);
