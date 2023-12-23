import sessionService from "../service/session.service"
import folderService from "../service/folder.service"
import { Folder } from "../../../shared/models/Folder.model"
import { Session } from "../../../shared/models/Session.model"

const getCurrentFolderId = () => {
	return folderService.getCurrentFolderId()
}

const requestNewFolder = async (): Promise<Folder> => {
	let session: Session = await sessionService.startAnonymousSession()
	let newFolder: Folder = await folderService.createNewFolder(session.userId)
	return newFolder
}

const deleteCurrentFolder  = async () : Promise<void> => {
	const folderId = folderService.getCurrentFolderId()
	if(!folderId) return
	await folderService.deleteFolder(folderId)
	folderService.disconnectFolder()
	sessionService.signOut()
}

export { getCurrentFolderId, requestNewFolder, deleteCurrentFolder }
