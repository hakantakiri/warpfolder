"use client"
import { MouseEvent, useEffect, useRef, useState } from "react"
import { PrimaryButton } from "./UploadButton"
import LogoSvg from "../icons/logo.svg"
import Image from "next/image"
import {
	linkToFolder,
	requestNewFolder,
} from "@/app/_domain/usecase/folder.usecase"
import { Folder } from "@/shared/models/Folder.model"
import { useRouter } from "next/navigation"

export const NoSessionHome = () => {
	const modalRef = useRef<HTMLDivElement>(null)
	const folderIdInput = useRef<HTMLInputElement>()
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)
	const [folderId, SetFolderId] = useState<string>("")

	useEffect(() => {
		folderIdInput.current?.focus()
	}, [folderIdInput.current])

	const closeModal = () => {
		modalRef.current?.classList?.add("hidden")
	}

	const openLinkModal = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		modalRef.current?.classList.remove("hidden")
	}

	const linkFolder = async (folderId: Folder["folderId"]) => {
		linkToFolder(folderId)
	}

	const uploadFirstTime = async () => {
		setLoading(true)
		const newFolder: Folder = await requestNewFolder()
		router.refresh()
	}

	return (
		<section className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center space-y-10">
				<div className="flex space-x-4">
					<Image src={LogoSvg} alt="logo" />
					<span className="flex justify-start items-center text-blue-400 ">
						<h1>
							WARP <br />
							FOLDER
						</h1>
					</span>
				</div>
				<PrimaryButton
					text="UPLOAD YOUR FIRST FILE"
					disabledText="Loading ..."
					onClick={uploadFirstTime}
					disabled={loading}
				/>
				<span className="space-x-2">
					<span>or</span>
					{!loading ? (
						<a
							className=" text-purple-400 hover:underline active:underline"
							href="#"
							onClick={openLinkModal}
						>
							link an existing folder
						</a>
					) : (
						<span>open an existing folder</span>
					)}
				</span>
			</div>

			<div
				ref={modalRef}
				className="flex items-center justify-center fixed inset-0 bg-gray-800 bg-opacity-75 hidden"
			>
				<div className="bg-white p-8 rounded shadow-lg w-1/2 flex-cols space-y-4">
					<p className="text-xl font-semibold mb-4">Insert folder id</p>
					<input
						type="text"
						ref={folderIdInput}
						autoFocus
						onChange={(e) => {
							SetFolderId(e.target.value)
						}}
					/>
					<div className="flex justify-left space-x-4">
						<button
							className="bg-cyan-500 hover:bg-cyan-600 text-blue-950 font-bold py-2 px-4 rounded"
							onClick={() => {
								linkFolder(folderId)
							}}
						>
							Link
						</button>
						<button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
							onClick={closeModal}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
