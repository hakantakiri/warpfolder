import File from "@/domain/models/File.model"
import { FileMenu } from "../ui/FileMenu"

interface FilesTableProps {
	files: File[]
	onShowFileDetail: (fileId: string) => void
	onFileDelete: (fileId: string) => void
}
export const FilesTable = (props: FilesTableProps) => {
	const downloadFile = (fileId: string) => {
		console.log(`Downloading file ${fileId}`)
	}

	const viewDetail = (fileId: string) => {
		props.onShowFileDetail(fileId)
	}

	const deleteFile = (fileId: string) => {
		console.log(`Deleting file ${fileId}`)
		props.onFileDelete(fileId)
	}

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
							<FileMenu
								fileId={file.fileId}
								onDownload={downloadFile}
								onViewDetail={viewDetail}
								onDelete={deleteFile}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
