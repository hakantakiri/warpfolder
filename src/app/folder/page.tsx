"use client"
import { useEffect, useState } from "react"
import { Footer } from "../components/ui/Footer"
import { Navbar } from "../components/ui/Navbar"
import { DetailSideBar } from "../components/ui/DetailSideBar"
import DeleteSvg from "../components/icons/delete.svg"
import { FilesTable } from "../components/ui/FilesTable"
import { PrimaryButton } from "../components/ui/UploadButton"
import { getCurrentFolderId } from "@/app/domain/usecase/folder.usecase"
import { getFiles } from "@/app/domain/usecase/files.usecase"
import File from "@/shared/models/File.model"
import { SideBar } from "../components/ui/SideBar"
import Image from "next/image"
import { inherits } from "util"

export default function FolderWorkspace() {
	const [isDetailOpen, SetIsDetailOpen] = useState<boolean>(false)
	const [files, setFiles] = useState<File[]>([])
	const [fileDetail, SetFileDetail] = useState<File>()
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [currentFolderId, setCurrentFolderId] = useState<string | null>()
	const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

	useEffect(() => {
		setCurrentFolderId(getCurrentFolderId())
		getFiles().then(setFiles)
		setIsLoading(false)
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
		<>
			<div
				className={`${
					isSideBarOpen ? `grid grid-cols-12 min-h-screen` : ``
				} w-full`}
			>
				{isSideBarOpen ? (
					<div className="col-span-3 relative">
						<SideBar />
					</div>
				) : (
					<></>
				)}

				<div className={`${isSideBarOpen ? `col-span-9` : ``} w-full`}>
					<Navbar
						isSideBarOpen={isSideBarOpen}
						onOpenSideBar={() => {
							setIsSideBarOpen(true)
						}}
						onCloseSideBar={() => {
							setIsSideBarOpen(false)
						}}
					/>
					<div className="flex flex-col">
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
				</div>
			</div>
		</>
	)
}
