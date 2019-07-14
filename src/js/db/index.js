import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBy09UQFrT9fBJpP7uvQTE-fLysm083OF8',
  authDomain: 'jata-79813.firebaseapp.com',
  databaseURL: 'https://jata-79813.firebaseio.com',
  projectId: 'jata-79813',
  storageBucket: 'jata-79813.appspot.com',
  messagingSenderId: '1034486699235',
  appId: '1:1034486699235:web:b75b7136bb5313bc'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
