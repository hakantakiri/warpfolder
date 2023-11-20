import { getCookie, setCookie } from "cookies-next"
import { auth } from "@/infra/firebaseAuth"
import { User as FirebaseSession, signInAnonymously } from "firebase/auth"
import { Session } from "../models/Session.model"

class SessionService {
	private currentUserId: string | null

	constructor() {
		this.currentUserId = getCookie("currentUserId") || null
	}

	public startAnonymousSession = async (): Promise<Session> => {
		let newFirebaseSession: FirebaseSession = (
			await signInAnonymously(auth)
		).user
		let newSession: Session = {
			userId: newFirebaseSession.uid,
		}
		setCookie("currentUserId", newSession.userId)
		return newSession
	}

	public getSession = () => {
		return auth.currentUser
	}

	public getIdToken = async (): Promise<string | null> => {
		return (await auth.currentUser?.getIdToken()) || null
	}
}

export default new SessionService()
