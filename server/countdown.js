let __RemainingSeconds = 0;
let __Interval = null;

module.exports = {
    getSecondsLeft: getRemainingSeconds,
    start: startCountdown,
};

function stopCountdown() {
    if(__Interval) clearInterval(__Interval);
}

function tick() {
    __RemainingSeconds = __RemainingSeconds - 1;
    if (__RemainingSeconds === 0) {
        stopCountdown();
    } 
}

function startCountdown(timerInSeconds) {
    __RemainingSeconds = timerInSeconds;
    __Interval = setInterval(tick, 1000);
    return __RemainingSeconds;
}

function getRemainingSeconds() {
    return __RemainingSeconds;
}