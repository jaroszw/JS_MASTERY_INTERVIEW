let obj = (function () {
  let objInstance;

  function create() {
    let _isRunning = "";

    let start = function () {
      _isRunning += " start";
    };

    let stop = function () {
      _isRunning += " stop";
    };

    let currentState = function () {
      return _isRunning;
    };

    return {
      start,
      stop,
      currentState,
    };
  }

  return {
    getInstance: function () {
      if (!objInstance) {
        return (objInstance = create());
      } else {
        return objInstance;
      }
    },
  };
})();

const obj1 = obj.getInstance();
const obj2 = obj.getInstance();
const obj3 = obj.getInstance();

obj1.start();
obj2.stop();
obj3.start();

console.log(obj1.currentState());
