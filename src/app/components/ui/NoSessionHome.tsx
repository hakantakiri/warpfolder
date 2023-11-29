"use client"
import { MouseEvent, useRef, useState } from "react"
import { PrimaryButton } from "./UploadButton"
import LogoSvg from "../icons/logo.svg"
import Image from "next/image"
import { requestNewFolder } from "@/app/domain/usecase/folder.usecase"
import { Folder } from "@/shared/models/Folder.model"
import { useRouter } from "next/navigation"

export const NoSessionHome = () => {
	const modalRef = useRef<HTMLDivElement>(null)
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)
	const closeModal = () => {
		modalRef.current?.classList?.add("hidden")
	}

	const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		modalRef.current?.classList.remove("hidden")
	}

	const uploadFirstTime = async () => {
		setLoading(true)
		const newFolder: Folder = await requestNewFolder()
		router.refresh()
		setLoading(false)
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
					x<span>or</span>
					{!loading ? (
						<a
							className=" text-purple-400 hover:underline active:underline"
							href="#"
							onClick={openModal}
						>
							open an existing folder
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
				<div className="bg-white p-8 rounded shadow-lg w-1/2">
					<p className="text-xl font-semibold mb-4">
						Modal Content Goes Here
					</p>
					<button
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
						onClick={closeModal}
					>
						Close Modal
					</button>
				</div>
			</div>
		</section>
	)
}
