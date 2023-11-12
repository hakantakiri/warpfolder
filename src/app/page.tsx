"use client"
import sessionUsecase from "@/domain/usecase/session.usecase"
import { useEffect, useState } from "react"
import { Navbar } from "./components/navbar/Navbar"
import { PrimaryButton } from "./components/uploadButton/uploadButton"
import { FilesTable } from "./components/filesTable/filesTable"
import { DetailSideBar } from "./components/detailSideBar/detailSideBar"
import File from "@/domain/models/File.model"
import { getFiles } from "@/domain/usecase/files.usecase"

export default function Home() {
	const [isDetailOpen, SetIsDetailOpen] = useState<boolean>(false)
	const [files, setFiles] = useState<File[]>([])
	const [fileDetail, SetFileDetail] = useState<any>({})

	useEffect(() => {
		const sessionId: string = sessionUsecase.getSession()
		getFiles().then((files) => {
			setFiles(files)
		})
	}, [])

	const showFileDetail = (fileId: string) => {
		SetFileDetail(files.find((f) => f.fileId === fileId))
		SetIsDetailOpen(true)
	}

	return (
		<>
			<Navbar />
			<main>
				<section className="flex justify-center space-x-8 p-16">
					<PrimaryButton text={"UPLOAD"} />
					<PrimaryButton text={"SHARE"} />
				</section>
				<section className={`flex container mx-auto h-screen`}>
					<div className={isDetailOpen ? `w-9/12` : `w-full`}>
						<FilesTable
							files={files}
							onFileMenuClicked={(fileId) =>
								showFileDetail(fileId)
							}
						/>
					</div>
					{isDetailOpen ? (
						<div className={`w-3/12`}>
							<DetailSideBar
								file={fileDetail}
								onClose={() => SetIsDetailOpen(false)}
							/>
						</div>
					) : (
						<></>
					)}
				</section>
			</main>
		</>
	)
}
