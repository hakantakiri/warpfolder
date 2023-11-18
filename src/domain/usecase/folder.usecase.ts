import { getCookie } from "typescript-cookie"

const getCurrentFolderId = () => {
	return getCookie("folderId") || null
}

export { getCurrentFolderId }
