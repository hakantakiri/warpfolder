import File from "@/domain/models/File.model"
import { Usage } from "@/domain/models/Usage.mode"
import DeleteSvg from "../icons/delete.svg"
import Image from "next/image"

interface UsageBarProps {
	files: File[]
	usage: Usage
	selectedFiles: number
	onDeleteSelectedFiles: () => void
}

const MAX_FILES_COUNT: number = 10
const MAX_STORAGE_SUM_IN_MB: number = 1000

export const UsageBar = (props: UsageBarProps) => {
	const DeleteGroupButton = (
		<button
			className="flex space-x-2 p-2
		shadow-lg border-2 border-transparent rounded-lg
		hover:bg-indigo-50 hover:border-indigo-50
		active:border-gray-500 
		"
			onClick={props.onDeleteSelectedFiles}
		>
			<Image src={DeleteSvg} alt="delete" />
			<span>Delete {props.selectedFiles} files</span>
		</button>
	)
	return (
		<div className="flex w-full justify-between items-center">
			<div className="flex space-x-8 p-4">
				<div>
					{props.files.length > 0
						? `${props.files.length} file${
								props.files.length ? "s," : ","
						  } ${
								MAX_FILES_COUNT - props.files.length
						  } uploads left `
						: ""}
				</div>
				<div>
					{props.usage
						? `${props.usage?.storageSum} ${
								props.usage?.storageUnit
						  } in total, ${
								MAX_STORAGE_SUM_IN_MB - props.usage?.storageSum
						  } MB left`
						: `Loading usage ...`}
				</div>
			</div>

			<div>
				{props.selectedFiles ? (
					<div className="flex space-x-8 items-center">
						<span>{props.selectedFiles} files selected</span>
						{DeleteGroupButton}
					</div>
				) : (
					""
				)}
			</div>
		</div>
	)
}
