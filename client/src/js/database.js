import { openDB } from 'idb';

const DATABASE_NAME = 'uniqueDB';
const DATABASE_VERSION = 2;
const STORE_NAME = 'uniqueStore';

const initializeDatabase = () => {
  return openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      if (db.objectStoreNames.contains(STORE_NAME)) {
        console.log(`${STORE_NAME} database already exists`);
        return;
      }
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      console.log(`${STORE_NAME} database created`);
    },
  });
};

export const addToDatabase = async (content) => {
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.put({ value: content, id: 1 });
    tx.oncomplete;
    console.log('Data added to the database', content);
  } catch (error) {
    console.error('Error adding data to the database', error);
    throw error;
  }
};

export const retrieveFromDatabase = async () => {
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const result = await store.get(1);
    console.log('Retrieved result', result);
    console.log('Retrieved result.value', result.value);
    return result.value;
  } catch (error) {
    console.error('Error retrieving data from the database', error);
    throw error;
  }
};

initializeDatabase();
