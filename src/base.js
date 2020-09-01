import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializwApp({
    apiKey: "AIzaSyDh_CLyiUWxxOzEnorxKc1LLBU17Czlq2I",
    authDomain: "catch-of-the-day-e9d8e.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e9d8e.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base