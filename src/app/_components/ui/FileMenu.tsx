import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react"
import Image from "next/image"
import ThreeDotSvg from "../../_components/icons/threedot.svg"
import DownloadSvg from "../../_components/icons/download.svg"
import DeleteSvg from "../../_components/icons/delete.svg"
import InformationSvg from "../../_components/icons/information.svg"

interface FileMenuProps {
	fileId: string
	onDownload: (fileId: string) => void
	onViewDetail: (fileId: string) => void
	onDelete: (fileId: string) => void
}

export const FileMenu = (props: FileMenuProps) => {
	const menuOptionStyle = `
    flex justify-start items-center p-2 space-x-4
    border-2 rounded-xl border-transparent  
    hover:bg-indigo-50 hover:border-indigo-50
    active:border-gray-500
	focus:outline-none
    hover:cursor-pointer`

	return (
		<Dropdown>
			<DropdownTrigger>
				<button
					className="flex justify-center items-center p-4 
                      			border-2 rounded-xl border-transparent  
                       			hover:bg-indigo-50 hover:border-indigo-50
                       			active:border-gray-500
								focus:outline-none"
				>
					<Image src={ThreeDotSvg} alt="Menu" />
				</button>
			</DropdownTrigger>
			<DropdownMenu
				className="p-8 bg-white border-2 shadow-lg rounded-lg"
				aria-label="Dynamic Actions"
			>
				<DropdownItem
					className={menuOptionStyle}
					onClick={() => props.onDownload(props.fileId)}
					startContent={<Image src={DownloadSvg} alt="Download" />}
				>
					Download
				</DropdownItem>

				<DropdownItem
					className={menuOptionStyle}
					onClick={() => props.onViewDetail(props.fileId)}
					startContent={<Image src={InformationSvg} alt="Details" />}
				>
					File information
				</DropdownItem>
				<DropdownItem
					className={menuOptionStyle}
					onClick={() => props.onDelete(props.fileId)}
					startContent={<Image src={DeleteSvg} alt="Delete" />}
				>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
