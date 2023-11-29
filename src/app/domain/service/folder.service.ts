import { db } from "@/app/infra/firebaseFirestore"
import { doc, setDoc } from "firebase/firestore"
import { Folder } from "../../../shared/models/Folder.model"
import { getCookie, setCookie, deleteCookie } from "cookies-next"

class FolderService {
	private collection: string
	private currentFolderId: string | null
	private FID: string = "currentFolderId"

	constructor() {
		this.collection = "folders"
		const currentFolderId: string | null = getCookie(this.FID) || null
		this.currentFolderId = currentFolderId || null
	}

	private removeFolderIdFromCoookie() {
		deleteCookie(this.FID)
		this.currentFolderId = null
	}

	public getCurrentFolderId = (): string | null => {
		return this.currentFolderId
	}

	public createNewFolder = async (userId: string): Promise<Folder> => {
		const newFolder: Folder = {
			folderId: crypto.randomUUID(),
			ownerId: userId,
		}
		await setDoc(doc(db, this.collection, newFolder.folderId), newFolder)
		setCookie(this.FID, newFolder.folderId)
		return newFolder
	}

	public disconnectFolder = () => {
		this.removeFolderIdFromCoookie()
	}
}

export default new FolderService()
