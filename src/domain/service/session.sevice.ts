import { auth } from "@/infra/firebaseAuth"
import { User as FirebaseSession, UserCredential, signInAnonymously } from "firebase/auth"
import { Session } from "../models/Session.model"

class SessionService {

    public startAnonymousSession = async () :Promise<Session>=> {
        let newFirebaseSession: FirebaseSession = (await signInAnonymously(auth)).user
        let newSession: Session = {
            userId: newFirebaseSession.uid
        }
        return newSession
    }    

    public getSession = ()=> {
    }

}

export default new SessionService()