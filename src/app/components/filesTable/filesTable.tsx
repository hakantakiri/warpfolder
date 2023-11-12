import Image from "next/image"
import TreedotSvg from "../../components//icons/threedot.svg"
import File from "@/domain/models/File.model"
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
} from "@nextui-org/react"

interface FilesTableProps {
	files: File[]
	onFileMenuClicked?: (fileId: string) => void
}
export const FilesTable = (props: FilesTableProps) => {
	return (
		<table className="min-w-full">
			<thead>
				<tr className="text-left">
					<th className="p-8 w-1/2">Name</th>
					<th className="p-8">Uploaded</th>
					<th className="p-8">Expires</th>
					<th className="p-10">Menu</th>
				</tr>
			</thead>
			<tbody>
				{props.files.map((file) => (
					<tr
						key={file.fileId}
						className="h-24 hover:bg-gray-50 hover:cursor-pointer"
					>
						<td className="px-8"> {file.name}</td>
						<td className="px-8"> {file.uploaded}</td>
						<td className="px-8"> {file.expiresAt}</td>
						<td className="px-8">
							<Dropdown>
								<DropdownTrigger>
									<button
										className="flex justify-center items-center p-4 
                      			border-2 rounded-xl border-transparent  
                       			hover:bg-indigo-50 hover:border-indigo-50
                       			active:border-gray-500"
									>
										<Image src={TreedotSvg} alt="Menu" />
									</button>
								</DropdownTrigger>
								<DropdownMenu
									className="flex flex-col w-60 p-8 bg-red-500 border-2 shadow-lg rounded-lg"
									aria-label="Dynamic Actions"
								>
									<DropdownItem className="flex justify-between items-center">
										Download
									</DropdownItem>
									<DropdownItem className="flex justify-between items-center">
										File information
									</DropdownItem>
									<DropdownItem className="flex justify-between items-center">
										Delete
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
