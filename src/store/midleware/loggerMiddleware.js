const loggerMidleware = (param) => (store) => (next) => (action) => {
    console.log("Logging", param);
    next(action);
};

export default loggerMidleware;
