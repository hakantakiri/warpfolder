import Image from "next/image"
import SanwdichSvg from "../icons/sandwich.svg"
import { useState } from "react"

export const Navbar = () => {
	const [svgIcon, setSvgIcon] = useState(SanwdichSvg)
	return (
		<nav className="bg-white-100  shadow-lg p-8 flex items-center space-x-6">
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
