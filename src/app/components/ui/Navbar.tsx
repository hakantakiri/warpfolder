import { deleteCookie } from "cookies-next"
import Image from "next/image"
import SanwdichSvg from "../icons/sandwich.svg"
import { useState } from "react"
import sessionUsecase from "@/app/domain/usecase/session.usecase"

export const Navbar = () => {
	const [svgIcon, setSvgIcon] = useState(SanwdichSvg)
	return (
		<nav className="flex w-full ">
			<div
				className="flex item-center w-full space-x-6 p-8 fixed top-0 z-50 shadow-lg
			bg-white"
			>
				<button
					className="bg-white-100 border-2 border-gray-100 w-16 h-16 
            shadow-lg  rounded-xl flex items-center justify-center hover:bg-indigo-50
             active:border-2 active:border-gray-500"
					onClick={() => {
						sessionUsecase.signOut()
					}}
				>
					<Image src={svgIcon} alt="sandwich" />
				</button>
				<div className="flex items-center">WARP FOLDER</div>
			</div>
			<div className="flex w-full h-32"></div>
		</nav>
	)
}
7
