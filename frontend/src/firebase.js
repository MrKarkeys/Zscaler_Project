import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDSRlM02eM75X_e6cnNwDcTmsQrAfxEBzI",
  authDomain: "zscaler-bafea.firebaseapp.com",
  projectId: "zscaler-bafea",
  storageBucket: "zscaler-bafea.appspot.com",
  messagingSenderId: "707133882331",
  appId: "1:707133882331:web:3c9c88f2d3825f0e0571fe",
  measurementId: "G-Z2C7G843HF"
})

export const auth = app.auth()
export default app
