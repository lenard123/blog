import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
})


export const db = firebase.firestore()
export const auth = firebase.auth()

const { TimeStamp, GeoPoint } = firebase.firestore

db.settings.timestampsInSnapshots = true

export default { firebase, db, TimeStamp, GeoPoint }