const LocalStorage = () => {
    const getObject = (key) => {
        const str = localStorage.getItem(key);
        return str ? JSON.parse(str) : null;
    }

    const saveObject = (key, obj) => {
        localStorage.setItem(key, JSON.stringify(obj));
    }
}

export default LocalStorage;