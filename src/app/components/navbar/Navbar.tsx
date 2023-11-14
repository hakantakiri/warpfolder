import Image from "next/image"
import SanwdichSvg from "../icons/sandwich.svg"
import { useState } from "react"

export const Navbar = () => {
	const [svgIcon, setSvgIcon] = useState(SanwdichSvg)
	return (
		<nav
			className="flex items-center w-full space-x-6 p-8 fixed top-0 z-50
		bg-white shadow-lg"
		>
			<div></div>
			<button
				className="bg-white-100 border-2 border-gray-100 w-16 h-16 
            shadow-lg  rounded-xl flex items-center justify-center hover:bg-indigo-50
             active:border-2 active:border-gray-500"
			>
				<Image src={svgIcon} alt="sandwich" />
			</button>
			<div className="">WARP FOLDER</div>
		</nav>
	)
}
7
