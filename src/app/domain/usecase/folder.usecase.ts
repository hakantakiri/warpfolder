import { getCookie } from "cookies-next"
import sessionSevice from "../service/session.service"
import folderService from "../service/folder.service"
import { Folder } from "../../../shared/models/Folder.model"
import { Session } from "../../../shared/models/Session.model"

const getCurrentFolderId = () => {
	return folderService.getCurrentFolderId()
}

const requestNewFolder = async (): Promise<Folder> => {
	let session: Session = await sessionSevice.startAnonymousSession()
	console.log("RECIEVED SESSION IS")
	console.log(session)
	let newFolder: Folder = await folderService.createNewFolder(session.userId)
	return newFolder
}

export { getCurrentFolderId, requestNewFolder }
