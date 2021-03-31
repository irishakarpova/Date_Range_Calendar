const generateId = (store) => (next) => (action) => {
    if (!action.generateId) return next(action);
    next({
        ...action,
        randomId: Date.now().toString()
    });
};
export default generateId;
