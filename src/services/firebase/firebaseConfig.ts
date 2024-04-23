import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyCaikN7p0tT4EdQ2xNFfENsjaqS43x24-k",
//     authDomain: "motorsport-f6e69.firebaseapp.com",
//     projectId: "motorsport-f6e69",
//     storageBucket: "motorsport-f6e69.appspot.com",
//     messagingSenderId: "769462630750",
//     appId: "1:769462630750:web:19c423fa56bb877e5af7cf"
//   };
 
  const firebaseConfig = {
    apiKey: "AIzaSyBIo1q7iBGmiZOv9qGR-hJ_hBIx8k2wt6M",
    authDomain: "motodos-1130d.firebaseapp.com",
    projectId: "motodos-1130d",
    storageBucket: "motodos-1130d.appspot.com",
    messagingSenderId: "514742226902",
    appId: "1:514742226902:web:3dd2669dc61352a49e9e77"
  };
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }