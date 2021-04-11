import admin from 'firebase-admin'

const serviceAccount = require('../configs/firebase/serviceAccount.json')

if (!admin.apps.length) {
	try {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: `https://${process.env.GOOGLE_DATABASE_NAME}.firebaseio.com`,
		})
	} catch (error) {
		console.log('Firebase admin initialization error', error.stack)
	}
}
export default admin.firestore()
