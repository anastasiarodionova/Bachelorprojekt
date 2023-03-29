const fei = require('firestore-export-import');
import * as admin from 'firebase-admin';
import path from 'path';
import fs from 'fs';

const DEFAULT_CONFIG_FILE = path.resolve(__dirname, '../data/firebase-admin-key.json');

if (process.env.FB_KEYS) {
  // Try the environment variable first
  fei.initializeApp(require(process.env.FB_KEYS), DATABASE_URL);
} else if (fs.existsSync(DEFAULT_CONFIG_FILE)) {
  // Check the default config file second
  fei.initializeApp(require(DEFAULT_CONFIG_FILE), DATABASE_URL);
} else {
  // Hopefully in Cloud env and can use default credentials
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: DATABASE_URL,
  });
  admin.firestore().settings({timestampsInSnapshots: true});
}

let homeData;
let productData;

export function getHomeData() {
  if (homeData) {
    return homeData;
  } else {
    fei.backup('home').then((data) => {
      homeData = {
        categories: data.home.categories.data,
        products: data.home.products.data,
      };
      return homeData;
    });
  }
}

export function getProducts(category) {
  if (productData) {
    return filterCategory(productData, category);
  } else {
    fei.backup('products').then((data) => {
      productData = data.products.data.items;
      return filterCategory(productData, category);
    });
  }
}

function filterCategory(products, category) {
  return products.filter((product) => {
    return product.category === category;
  });
}

export function getProduct(productUrl) {
  if (productData) {
    return findUrl(productData, productUrl);
  } else {
    fei.backup('products').then((data) => {
      productData = data.products.data.items;
      return findUrl(productData, productUrl);
    });
  }
}

function findUrl(products, productUrl) {
  return products.find((product) => {
    return product.url === productUrl;
  });
}
