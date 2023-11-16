"use client"
import sessionUsecase from "@/domain/usecase/session.usecase"
import { useEffect, useState } from "react"
import { Navbar } from "./components/navbar/Navbar"
import { PrimaryButton } from "./components/uploadButton/uploadButton"
import { FilesTable } from "./components/filesTable/filesTable"
import { DetailSideBar } from "./components/detailSideBar/detailSideBar"
import File from "@/domain/models/File.model"
import { getFiles } from "@/domain/usecase/files.usecase"
import { Footer } from "./components/ui/Footer"

export default function Home() {
	const [isDetailOpen, SetIsDetailOpen] = useState<boolean>(false)
	const [files, setFiles] = useState<File[]>([])
	const [fileDetail, SetFileDetail] = useState<File>({})

	useEffect(() => {
		const sessionId: string = sessionUsecase.getSession()
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
								file={fileDetail}
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
		</main>
	)
}
