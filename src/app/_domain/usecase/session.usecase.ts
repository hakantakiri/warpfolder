import { getCookie, setCookie } from "cookies-next"
import folderService from "../service/folder.service"
import sessionSevice from "../service/session.service"
class SessionUsecase {
	private setSession(sessionId: string): void {}

	public getSession(): string {
		const sessionId: string | undefined =
			getCookie("sessionId") || crypto.randomUUID()
		setCookie("sessionId", sessionId)
		return sessionId
	}

	public signOut() {
		folderService.disconnectFolder()
		sessionSevice.signOut()
	}
}

export default new SessionUsecase()
