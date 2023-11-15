import File from "@/domain/models/File.model"
import { FileMenu } from "../ui/FileMenu"
import Image from "next/image"
import EmptyCheckboxSvg from "../icons/emptyCheckbox.svg"
import SelectedCheckboxSvg from "../icons/selectedCheckbox.svg"
import UsedCheckboxSvg from "../icons/usedCheckbox.svg"
import { useEffect, useState } from "react"

interface FilesTableProps {
	files: File[]
	onShowFileDetail: (fileId: string) => void
	onFileDelete: (fileId: string) => void
	onFilesSelected: (files: string[]) => void
}

enum OrderDirectionEnum {
	ASC = "ASC",
	DESC = "DESC",
}

export const FilesTable = (props: FilesTableProps) => {
	const [files, setFiles] = useState<File[]>([])
	const [selectedFiles, SetSelectedFiles] = useState<string[]>([])
	const [orderBy, setOrderedBy] = useState<keyof File>()
	const [orderDirection, setOrderDirection] =
		useState<OrderDirectionEnum | null>(null)

	useEffect(() => {
		setFiles(props.files)
		SetSelectedFiles(
			selectedFiles.filter((id) =>
				props.files.some((f) => f.fileId === id)
			)
		)
	}, [props])

	useEffect(() => {
		console.log("invoked")
		props.onFilesSelected(selectedFiles)
	}, [selectedFiles])

	const selectFile = (fileId: string) => {
		if (selectedFiles.find((id) => id === fileId)) {
			SetSelectedFiles([...selectedFiles.filter((id) => id !== fileId)])
		} else {
			SetSelectedFiles([...selectedFiles, fileId])
		}
	}

	const selectAll = () => {
		if (files.length === selectedFiles.length) {
			SetSelectedFiles([])
		} else {
			SetSelectedFiles(files.map((file) => file.fileId))
		}
	}

	const orderByColumn = (attribute: keyof File) => {
		if (!attribute) return

		console.log("attribute")
		console.log(attribute)
		console.log("orderDirection")
		console.log(orderDirection)
		console.log("orderBy")
		console.log(orderBy)

		if (orderBy === attribute) {
			if (orderDirection === OrderDirectionEnum.DESC || !orderDirection) {
				setFiles(
					files.slice().sort((a, b) => {
						const valueA = a[attribute] || ""
						const valueB = b[attribute] || ""
						return valueA.localeCompare(valueB)
					})
				)
				setOrderDirection(OrderDirectionEnum.ASC)
			} else {
				setFiles(
					files.slice().sort((a, b) => {
						const valueA = a[attribute] || ""
						const valueB = b[attribute] || ""
						return valueB.localeCompare(valueA)
					})
				)

				setOrderDirection(OrderDirectionEnum.DESC)
			}
			setOrderedBy(attribute)
			return
		}

		setFiles(
			files.slice().sort((a, b) => {
				const valueA = a[attribute] || ""
				const valueB = b[attribute] || ""
				return valueA.localeCompare(valueB)
			})
		)
		setOrderDirection(OrderDirectionEnum.ASC)
		setOrderedBy(attribute)
	}

	const downloadFile = (fileId: string) => {
		console.log(`Downloading file ${fileId}`)
	}

	const viewDetail = (fileId: string) => {
		props.onShowFileDetail(fileId)
	}

	const deleteFile = (fileId: string) => {
		console.log(`Deleting file ${fileId}`)
		SetSelectedFiles([...selectedFiles.filter((id) => id !== fileId)])
		props.onFileDelete(fileId)
	}

	return (
		<div>
			{/* <UsageBar files /> */}
			<table className="min-w-full">
				<thead>
					<tr className="text-left border-t-2 border-b-2 border-gray-200">
						<th className="flex p-8 space-x-4 w-1/2">
							<Image
								src={
									selectedFiles.length == 0
										? EmptyCheckboxSvg
										: files.length == selectedFiles.length
										? SelectedCheckboxSvg
										: UsedCheckboxSvg
								}
								alt="select icon"
								onClick={selectAll}
							/>
							<span>Name</span>
							<button onClick={() => orderByColumn("name")}>
								V
							</button>
						</th>
						<th className="p-8">Uploaded</th>
						<th className="p-8">Expires</th>
						<th className="p-10">Menu</th>
					</tr>
				</thead>
				<tbody>
					{files.map((file) => (
						<tr
							key={file.fileId}
							className={`h-24 
						${
							selectedFiles.find((id) => id === file.fileId)
								? `bg-blue-100 hover:bg-blue-200 border-t-2 border-b-2 border-blue-100`
								: `hover:bg-gray-50 border-t-2 border-b-2 border-gray-100`
						}
						hover:cursor-pointer cursor-none`}
							onClick={() => selectFile(file.fileId)}
						>
							<td className="flex items-center p-8 space-x-4">
								<Image
									src={
										selectedFiles.find(
											(id) => id === file.fileId
										)
											? SelectedCheckboxSvg
											: EmptyCheckboxSvg
									}
									alt={`Select file ${file.name}`}
								/>
								<span>{file.name}</span>
							</td>
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
		</div>
	)
}
