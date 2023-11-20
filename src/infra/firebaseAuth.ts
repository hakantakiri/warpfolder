import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseApp";

const auth = getAuth(app)
onAuthStateChanged(auth, (firebaseSession)=> {
    console.log('new firebase session')
    console.log(firebaseSession)
})

export {auth}
