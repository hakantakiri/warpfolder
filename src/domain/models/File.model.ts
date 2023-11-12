export default interface File {
	fileId: string
	name: string
	previewUrl: string
	uploaded: string
	lastDownloaded?: string
	expiresAt: string
	userId: string
}
