import firebase from 'firebase'

export const initFirebase = () => {
  try {
    var config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
      storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`
    }

    const app = firebase.initializeApp(config)
    console.log('Firebase init successfully')
    return app
  } catch (err) {
    console.error('Firebase Error:', err.stack)
  }
}

const app = initFirebase()
export default app
