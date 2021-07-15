import firebase from "firebase/app"
import "firebase/auth"

const config = {  
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

console.log(
  process.env.REACT_APP_FB_API_KEY
)

const app = firebase.initializeApp(config);

export const auth = app.auth()
export default app