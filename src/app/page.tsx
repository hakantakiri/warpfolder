"use client"
import { useEffect, useState } from "react"
import { Navbar } from "./components/ui/Navbar"
import { PrimaryButton } from "./components/ui/uploadButton"
import { FilesTable } from "./components/ui/filesTable"
import { DetailSideBar } from "./components/ui/detailSideBar"
import File from "@/domain/models/File.model"
import { getFiles } from "@/domain/usecase/files.usecase"
import { Footer } from "./components/ui/Footer"
import { getCurrentFolderId } from "@/domain/usecase/folder.usecase"
import { NoSessionHome } from "./components/ui/NoSessionHome"

export default function Home() {
	const [isDetailOpen, SetIsDetailOpen] = useState<boolean>(false)
	const [files, setFiles] = useState<File[]>([])
	const [fileDetail, SetFileDetail] = useState<File>()
	const [currentFolderId, setCurrentFolderId] = useState<string | null>()

	useEffect(() => {
		setCurrentFolderId(getCurrentFolderId())
		getFiles().then(setFiles)
	}, [])

	const showFileDetail = (fileId: string) => {
		const selectedFile: File | undefined = files.find(
			(f) => f.fileId === fileId
		)
		if (!selectedFile) return
		SetFileDetail(selectedFile)
		SetIsDetailOpen(true)
	}

	const filesSelected = (fileIds: string[]) => {
		console.log(`${fileIds.length} files selected`)
	}

	const deleteFile = (fileId: string) => {
		const filteredFiles: File[] = files.filter((f) => f.fileId !== fileId)
		setFiles(filteredFiles)
		if (fileDetail?.fileId && fileDetail.fileId === fileId)
			SetIsDetailOpen(false)
	}

	const deleteFileGroup = (fileIds: string[]) => {
		console.log("Delete files:")
		console.log(fileIds)

		const filteredFiles: File[] = files.filter(
			(f) => !fileIds.includes(f.fileId)
		)
		console.log("filtered files")
		console.log(filteredFiles)
		setFiles(filteredFiles)
		if (fileDetail?.fileId && fileIds.includes(fileDetail.fileId))
			SetIsDetailOpen(false)
	}

	return (
		<main className="flex flex-col h-screen justify-between">
			{!currentFolderId ? (
				<NoSessionHome />
			) : (
				<>
					<Navbar />
					<div className="flex flex-col h-full">
						<section className="flex justify-center space-x-8 p-16 ">
							<PrimaryButton text={"UPLOAD"} />
							<PrimaryButton text={"SHARE"} />
						</section>
						<section className={`flex container mx-auto h-full `}>
							<div className={isDetailOpen ? `w-9/12` : `w-full`}>
								<FilesTable
									files={files}
									onShowFileDetail={showFileDetail}
									onFileDelete={deleteFile}
									onFilesSelected={filesSelected}
									onDeleteFileGroup={deleteFileGroup}
								/>
							</div>
							{isDetailOpen ? (
								<div className={`w-3/12`}>
									<DetailSideBar
										file={fileDetail as File}
										onClose={() => SetIsDetailOpen(false)}
										onDownload={() => {}}
										onDelete={(fileId) => {
											deleteFile(fileId)
											SetIsDetailOpen(false)
										}}
									/>
								</div>
							) : (
								<></>
							)}
						</section>
					</div>
					<Footer />
				</>
			)}
		</main>
	)
}
