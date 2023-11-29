import { cookies } from "next/headers"

const getCurrentFolderIdBackend = (): string | null => {
	const folderId = cookies().get("currentFolderId")?.value || null
	console.log("folderId")
	console.log(folderId)
	return folderId
}

export { getCurrentFolderIdBackend }
