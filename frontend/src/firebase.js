import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAi9qAjNkiShD6oHvj0dSx8YsDm694l3UE",
  authDomain: "zsauth-7201b.firebaseapp.com",
  projectId: "zsauth-7201b",
  storageBucket: "zsauth-7201b.appspot.com",
  messagingSenderId: "808929362559",
  appId: "1:808929362559:web:f6944da96962fb927bf54a",
  measurementId: "G-F0XVC0VD32"
})

export const auth = app.auth()
export default app
