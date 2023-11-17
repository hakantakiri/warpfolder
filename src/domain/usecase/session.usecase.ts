import { getCookie, setCookie } from "typescript-cookie"
class SessionUsecase {
	private setSession(sessionId: string): void {}

	public getSession(): string {
		const sessionId: string | undefined =
			getCookie("sessionId") || crypto.randomUUID()
		setCookie("sessionId", sessionId)
		return sessionId
	}
}

export default new SessionUsecase()
