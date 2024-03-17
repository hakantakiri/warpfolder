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

const linkToFolder = async (folderId: Folder['folderId']):Promise<void>=> {
	await folderService.setCurrentFolderId(folderId)
}

const changeFolder = async (newFolderId: Folder['folderId']): Promise<void> => {
	const prevFolderId: Folder['folderId']|null = folderService.getCurrentFolderId()
	if( !prevFolderId){
		sessionService.signOut()
	}
	await folderService.setCurrentFolderId(newFolderId)
}

export { getCurrentFolderId, requestNewFolder, deleteCurrentFolder, changeFolder , linkToFolder}
