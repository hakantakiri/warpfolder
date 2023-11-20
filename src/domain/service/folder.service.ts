import { db } from "@/infra/firebaseFirestore"
import { doc, setDoc } from "firebase/firestore"
import { Folder } from "../models/Folder.model"
import { getCookie, setCookie } from "cookies-next"

class FolderService {
	private collection: string
	private currentFolderId: string | null

	constructor() {
		this.collection = "folders"
		const currentFolderId: string | null = getCookie("currentFolderId") as
			| string
			| null
		this.currentFolderId = currentFolderId || null
	}

	public getCurrentFolderId = () => {
		return this.currentFolderId
	}

	public createNewFolder = async (userId: string): Promise<Folder> => {
		const newFolder: Folder = {
			folderId: crypto.randomUUID(),
			ownerId: userId,
		}
		await setDoc(doc(db, this.collection, newFolder.folderId), newFolder)
		setCookie("currentFolderId", newFolder.folderId)
		return newFolder
	}
}

export default new FolderService()
