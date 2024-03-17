import { getCurrentFolderIdBackend } from "../backend/usecases/folder.uc.back"
import { NoSessionHome } from "./_components/ui/NoSessionHome"
import FolderWorkspace from "./folder/page"

export default function Home() {
	const currentFolderId = getCurrentFolderIdBackend()

	return (
		<main className="flex flex-col h-screen justify-between">
			{currentFolderId ? <FolderWorkspace /> : <NoSessionHome />}
		</main>
	)
}
