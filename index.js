function StopWatch() {
  let startTime;

  this.start = () => {
    if (startTime) return "Already started";
    startTime = new Date();
  };

  this.stop = () => {
    if (startTime) {
      let time = startTime;
      init();
      return `Total Time ${(new Date() - time) / 1000}s`;
    }
    return "Watch Not Running";
  };

  this.reset = () => {
    init();
    return `Stopwatch reset and stopped`;
  };

  const init = () => {
    startTime = null;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return startTime
        ? `${(new Date() - startTime) / 1000}s`
        : "Watch Not Running";
    }
  });
}
