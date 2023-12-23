import { db } from "@/app/infra/firebaseFirestore"
import { deleteDoc, doc, setDoc } from "firebase/firestore"
import { Folder } from "../../../shared/models/Folder.model"
import { getCookie, setCookie, deleteCookie } from "cookies-next"

class FolderService {
	private collection: string
	private FID: string = "currentFolderId"

	constructor() {
		this.collection = "folders"
		const currentFolderId: string | null = getCookie(this.FID) || null
	}
	private setCurrentFolderIdToCookie(folderId: string){
		setCookie(this.FID, folderId)
	}

	private getCurrentFolderIdFromCookie(){
		return getCookie(this.FID) || null
	}

	private deleteCurrentFolderIdFromCookie(){
		deleteCookie(this.FID)
	}

	private removeFolderIdFromCookie() {
		deleteCookie(this.FID)
		this.deleteCurrentFolderIdFromCookie()
	}

	// Public methods

	public getCurrentFolderId = (): string | null => {
		return this.getCurrentFolderIdFromCookie()
	}

	public createNewFolder = async (userId: string): Promise<Folder> => {
		const newFolder: Folder = {
			folderId: crypto.randomUUID(),
			ownerId: userId,
		}
		await setDoc(doc(db, this.collection, newFolder.folderId), newFolder)
		this.setCurrentFolderIdToCookie(newFolder.folderId)
		return newFolder
	}

	public disconnectFolder = () => {
		this.removeFolderIdFromCookie()
	}

	public async deleteFolder(folderId: string ): Promise<void> {
		const resp = await deleteDoc(doc(db, this.collection, folderId))
		console.log('deletion resp')
		console.log(resp)
	}
}

export default new FolderService()
