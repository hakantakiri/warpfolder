import { getCookie } from "cookies-next"
import sessionSevice from "../service/session.sevice"
import folderService from "../service/folder.service"
import { Folder } from "../models/Folder.model"
import { Session } from "../models/Session.model"

const getCurrentFolderId = () => {
	let cookie = getCookie("currentFolderId")
	console.log("current folder id")
	console.log(cookie)
	return getCookie("currentFolderId") || null
}

const requestNewFolder = async (): Promise<Folder> => {
	let session: Session = await sessionSevice.startAnonymousSession()
	console.log("RECIEVED SESSION IS")
	console.log(session)
	let newFolder: Folder = await folderService.createNewFolder(session.userId)
	return newFolder
}

export { getCurrentFolderId, requestNewFolder }
