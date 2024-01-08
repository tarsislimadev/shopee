import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "xxxxxxxxxx00xxxxxx000xxx0xxx0xxxxxxxxxx",
  authDomain: "shopee-01-a609f.firebaseapp.com",
  projectId: "shopee-01-a609f",
  storageBucket: "shopee-01-a609f.appspot.com",
  messagingSenderId: "000000000000",
  appId: "0:000000000000:web:00x0x00000xxx0000xx0x0",
  measurementId: "G-XX000X0XXX"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
