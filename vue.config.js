const { defineConfig } = require("@vue/cli-service");

//Cache control
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=31536000');
  next();
});

module.exports = defineConfig({
  transpileDependencies: true,
}); 

module.exports = {
  pwa: {
    name: "AR Webshop",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    //  swSrc: "./src/firebase/firebase-messaging-sw.js"
    }
  }
};
