"use client"
import { MouseEvent, useRef } from "react"
import { PrimaryButton } from "./uploadButton"

export const NoSessionHome = () => {
	const modalRef = useRef<HTMLDivElement>(null)

	const closeModal = () => {
		modalRef.current?.classList?.add("hidden")
	}

	const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		modalRef.current?.classList.remove("hidden")
	}
	return (
		<section className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center space-y-10">
				<PrimaryButton text="UPLOAD YOUR FIRST FILE" />
				<hr />
				<span>or</span>
				<a href="#" onClick={openModal}>
					open an existing folder
				</a>
			</div>

			<div
				ref={modalRef}
				className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center hidden"
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
