// export default class FancyLogger {
//   constructor() {
//     this.logs = [];
//   }

//   log(message) {
//     this.logs.push(message);
//     console.log(`Fancy: ${message}`);
//   }

//   printLogCount() {
//     console.log(`${this.logs.length} Logs`);
//   }
// }

// Class singelton
class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      console.log("LOGGING just once by the occasion of creatong of the class");
      FancyLogger.instance = this;
    }

    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Fancy: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger); // to freeze to not to let mutate methods andf properties in the instance

function logFirstTImeLogger() {
  logger.printLogCount(); // 0 Logs
  logger.log("First"); // Fancy: First
  logger.printLogCount(); // 1 Logs
}

function logSecondTImeLogger2() {
  logger.printLogCount(); // 1 Logs
  logger.log("Second"); // Fancy: Second
  logger.printLogCount(); // 2 Logs
}

logFirstTImeLogger(); // creategion instance of the logger
logSecondTImeLogger2(); // calling tmethods in the same instance

// export default logger;

//FUNCTIONAL WAY OF CERATING LOGGER
// export const FancyLogger2 = (function () {
//   let instanceOfFancy;
//   function create() {
//     let logs = [];

//     return {
//       pushLogs: function (message) {
//         logs.push(message);
//       },

//       deleteLogs() {
//         logs.pop();
//       },

//       getCurrent5LogsState() {
//         return logs;
//       },
//     };
//   }

//   return {
//     getInstanceOfLogger: function () {
//       if (!instanceOfFancy) {
//         return (instanceOfFancy = create());
//       } else {
//         return instanceOfFancy;
//       }
//     },
//   };
// })();

// const funnyLogger1 = FancyLogger2.getInstanceOfLogger();
// const funnyLogger2 = FancyLogger2.getInstanceOfLogger();
// const funnyLogger3 = FancyLogger2.getInstanceOfLogger();
// const funnyLogger4 = FancyLogger2.getInstanceOfLogger();

// funnyLogger1.pushLogs(1);
// funnyLogger2.pushLogs(2);
// funnyLogger3.pushLogs(3);
// funnyLogger4.pushLogs(4);

// funnyLogger3.deleteLogs();
// funnyLogger1.deleteLogs();

// const result = funnyLogger1.getCurrent5LogsState();
// console.log(result);
