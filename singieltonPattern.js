export default class FancyLogger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(`Fancy: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const fancy = new FancyLogger();
fancy.log("First");
fancy.log("First");

const notFancy = new FancyLogger();
notFancy.log("Second");
notFancy.log("Second");

notFancy.printLogCount();
fancy.printLogCount();

const FancyLogger2 = (function () {
  let instanceOfFancy;
  function create() {
    let logs = [];

    return {
      pushLogs: function (message) {
        logs.push(message);
      },

      deleteLogs() {
        logs.pop();
      },

      getCurrent5LogsState() {
        return logs;
      },
    };
  }

  return {
    getInstanceOfLogger: function () {
      if (!instanceOfFancy) {
        return (instanceOfFancy = create());
      } else {
        return instanceOfFancy;
      }
    },
  };
})();

const funnyLogger1 = FancyLogger2.getInstanceOfLogger();
const funnyLogger2 = FancyLogger2.getInstanceOfLogger();
const funnyLogger3 = FancyLogger2.getInstanceOfLogger();
const funnyLogger4 = FancyLogger2.getInstanceOfLogger();

funnyLogger1.pushLogs(1);
funnyLogger2.pushLogs(2);
funnyLogger3.pushLogs(3);
funnyLogger4.pushLogs(4);

funnyLogger3.deleteLogs();
funnyLogger1.deleteLogs();

const result = funnyLogger1.getCurrent5LogsState();
console.log(result);
