var UI = (function() {
  function UI() {
  }

  UI.prototype.init = function() {
  };

  // Global UI instance.
  var instance;
  return {
    getInstance: function () {
      if (!instance)
        instance = new UI();

      return instance;
    }
  }
})();