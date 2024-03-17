import Image from "next/image"
import DeleteSvg from "../../_components/icons/delete.svg"
import ChangeSvg from "../../_components/icons/change.svg"
import {
	connectAnotherFolder,
	deleteCurrentFolder,
} from "@/app/_domain/usecase/folder.usecase"

export const SideBar = () => {
	const connectToNewFolder = async () => {
		const folderId = "1132423"
		await connectAnotherFolder(folderId)
	}
	return (
		<section
			className="flex flex-col sticky top-0 bottom-0 left-0 h-screen justify-between
        				bg-gray-800 text-white p-4 "
		>
			<div>top</div>
			<div>
				<ul>
					<li>
						<button className="flex p-4 space-x-4" onClick={connectToNewFolder}>
							<Image src={ChangeSvg} alt="Delete" />
							<span>Link another folder</span>
						</button>
					</li>
					<li>
						<button
							className="flex p-4 space-x-4"
							onClick={deleteCurrentFolder}
						>
							<Image src={DeleteSvg} alt="Delete" />
							<span>Delete folder</span>
						</button>
					</li>
				</ul>
			</div>
		</section>
	)
}
