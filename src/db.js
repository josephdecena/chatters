import {useState, useEffect} from 'react'
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

let store
const coll = 'messages'

function useDB(room) {
    const [messages, setMessages] = useState([])

    function add(m) {
        setMessages(current => {
            const msgs = [m, ...current]
            msgs.sort((a,b)=> b.ts.seconds - a.ts.seconds)
            return msgs
        })
    }
    function remove(id) {
        setMessages(current=> current.filter(m=> m.id!==id))
    }
    
    useEffect(() => {
        store.collection(coll)
        .where('room','==',room)
        .onSnapshot(snap=> snap.docChanges().forEach(c=> {
            const {doc, type} = c
            if (type==='added') add({...doc.data(),id:doc.id})
            if (type==='removed') remove(doc.id)
        }))
    }, [])
    return messages
}

const db = {}
db.send = function(msg) {
    return store.collection(coll).add(msg)
}
db.delete = function(id) {
    return store.collection(coll).doc(id).delete()
}

export { db, useDB }

const firebaseConfig = {
    apiKey: "AIzaSyAf4n_jVlWItUQ-PPBwTLZwysYjTbMLaCY",
    authDomain: "chatter2020-aed58.firebaseapp.com",
    databaseURL: "https://chatter2020-aed58.firebaseio.com",
    projectId: "chatter2020-aed58",
    storageBucket: "chatter2020-aed58.appspot.com",
    messagingSenderId: "417652532128",
    appId: "1:417652532128:web:8183657e321fbc0275bac5"
  };

firebase.initializeApp(firebaseConfig)
store = firebase.firestore()