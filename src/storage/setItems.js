export const addObjectToLocalStorage = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object));
};