import { getCookie, setCookie, deleteCookie } from "cookies-next"
import { auth } from "@/app/infra/firebaseAuth"
import { User as FirebaseSession, signInAnonymously } from "firebase/auth"
import { Session } from "../../../shared/models/Session.model"

class SessionService {
	private setCookieSession(session: Session): void {
		setCookie("userId", session.userId)
		setCookie("sessionToken", session.sessionToken)
	}

	private getCookieSession(): Session | null {
		const userId: string | null = getCookie("userId") || null
		const sessionToken: string | null = getCookie("sessionToken") || null
		if (!userId || !sessionToken) return null
		return {
			userId: userId,
			sessionToken,
		}
	}

	private deleteSessionCookie(): void {
		deleteCookie("userId")
		deleteCookie("sessionToken")
	}

	private async updateSessionToken(): Promise<void> {
		const newSessionToken: string | null =
			(await auth.currentUser?.getIdToken()) || null
		const oldSessionTken: string | null = getCookie("sessionToken") || null
		if (oldSessionTken && newSessionToken)
			setCookie("sessionToken", newSessionToken)
	}

	public async startAnonymousSession(): Promise<Session> {
		let newFirebaseSession: FirebaseSession = (
			await signInAnonymously(auth)
		).user
		let newSession: Session = {
			userId: newFirebaseSession.uid,
			sessionToken: await newFirebaseSession.getIdToken(),
		}
		this.setCookieSession(newSession)
		return newSession
	}

	public async getSession(): Promise<Session | null> {
		await this.updateSessionToken
		return this.getCookieSession()
	}

	public async signOut(): Promise<void> {
		await auth.signOut()
		this.deleteSessionCookie()
	}
}

export default new SessionService()
