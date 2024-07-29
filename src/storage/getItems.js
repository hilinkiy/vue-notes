export const getObjectFromLocalStorage = (key) => {
    const storedObject = localStorage.getItem(key);
    return storedObject ? JSON.parse(storedObject) : null;
};