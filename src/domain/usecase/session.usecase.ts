class SessionUsecase {
	private setSession(sessionId: string): void {
		localStorage.setItem("sessionId", sessionId)
	}

	public getSession(): string {
		let sessionId: string | null = localStorage.getItem("sessionId")
		sessionId = sessionId ? sessionId : crypto.randomUUID()
		this.setSession(sessionId)
		return sessionId
	}
}

export default new SessionUsecase()
