var main = (function() {

  function App() {
    this.ui = UI.getInstance();
    this.ui.init();
  }

  return {
    App: App
  }
})();

var app = new main.App();