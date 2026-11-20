// ================== НАСТРОЙКИ ПРИЛОЖЕНИЯ ==================
// Это единственный файл, который нужно поменять.
//
// 1) В блок firebase вставь значения из Firebase
//    (Настройки проекта → Your apps → SDK setup and configuration → Config).
//    Пока apiKey пустой, приложение работает в ДЕМО-режиме
//    (данные только на этом устройстве, с примерами).
//
// 2) В owner впиши имя (для приветствия) и почту, под которой будет вход.
//    Эта же почта должна быть в правилах базы (файл firestore-rules.txt).

window.APP_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  owner: { name: "Наташа", email: "" }
};
