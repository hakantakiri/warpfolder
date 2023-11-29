import Image from "next/image"
import DeleteSvg from "../../components/icons/delete.svg"

export const SideBar = () => {
	return (
		<section
			className="flex flex-col h-full w-full justify-between
        
        bg-gray-800 text-white p-4"
		>
			<div>top</div>
			<div>
				<ul>
					<li>
						<button className="flex p-4 space-x-4">
							<Image src={DeleteSvg} alt="Delete" />
							<span>Delete folder</span>
						</button>
					</li>
				</ul>
			</div>
		</section>
	)
}
