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
    apiKey: "AIzaSyAxXG4Pj3KkPvi_wBLlLj_LGcmde-dOHWo",
    authDomain: "finansy-6e0e5.firebaseapp.com",
    projectId: "finansy-6e0e5",
    storageBucket: "finansy-6e0e5.firebasestorage.app",
    messagingSenderId: "580118901599",
    appId: "1:580118901599:web:4c6e17178916db6920fcea"
  },

  owner: { name: "Наташа", email: "paskonata81@gmail.com" }
};
