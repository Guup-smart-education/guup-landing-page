import admin from 'firebase-admin'

if (!admin.apps.length) {
	try {
		admin.initializeApp({
			credential: admin.credential.cert({
				privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
				projectId: process.env.FIREBASE_PROJECT_ID,
			}),
			databaseURL: `https://${process.env.GOOGLE_DATABASE_NAME}.firebaseio.com`,
		})
	} catch (error) {
		console.log('Firebase admin initialization error', error.stack)
	}
}
export default admin.firestore()
