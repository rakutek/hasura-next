import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyCjak3pIFKpZQBrip2EZ4H67MjNacWS5dU",
    authDomain: "hasura-demo-ba394.firebaseapp.com",
    projectId: "hasura-demo-ba394",
    storageBucket: "hasura-demo-ba394.appspot.com",
    messagingSenderId: "203269021263",
    appId: "1:203269021263:web:44891c40b5aa78d64d143a",
    measurementId: "G-5QDNBFEX5P"
}

firebase.initializeApp(firebaseConfig)

export default firebase
