import * as admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

export const initFirebaseAdmin = () => {
  try {
    const config = {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://fern-avatar.firebaseio.com'
    }
    const app = admin.initializeApp(config)
    console.log('Firebase admin init successfully')
    return app
  } catch (err) {
    console.error('Firebase Admin Error:', err.stack)
  }
}

const app = initFirebaseAdmin()
export default app
