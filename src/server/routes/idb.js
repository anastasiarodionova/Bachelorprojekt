const { openDB } = require('idb');
const dbPromise = openDB('translations', 1, {
    upgrade(db) {
        db.createObjectStore('keyval');
    },
});

async function get(key) {
    return (await dbPromise).get('keyval', key);
}

async function set(key, val) {
    return (await dbPromise).put('keyval', val, key);
}

async function keys() {
    return (await dbPromise).getAllKeys('keyval');
}
async function getAll() {
    return (await dbPromise).getAll('keyval');

}

module.exports = { get, set, keys, getAll }