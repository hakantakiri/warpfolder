import File from "@/domain/models/File.model"
import Image from "next/image"
import CloseSvg from "../icons/close.svg"

interface DetailSideBarProps {
	file: File
	onClose: () => void
}

export const DetailSideBar = (props: DetailSideBarProps) => {
	return (
		<section className="flex h-full  rounded-md border-2 border-gray-200 shadow-lg shadow-gray-200 ">
			<div className="flex-col w-full p-8 ">
				<div className="flex justify-between items-center">
					<strong>{props.file.name}</strong>
					<button
						className="flex justify-center items-center p-4 
                      			border-2 rounded-xl border-transparent  
                       			hover:bg-indigo-50 hover:border-indigo-50
                       			active:border-gray-500"
						onClick={props.onClose}
					>
						<Image src={CloseSvg} alt="Close file detail" />
					</button>
				</div>
				<ul className="flex flex-col py-8">
					<li className="mb-4">
						<div>
							<strong>File id</strong>
						</div>
						{props.file.fileId}
					</li>
					<li className="mb-4">
						<div>
							<strong>Upload date</strong>
						</div>
						{props.file.uploaded}
					</li>
					<li className="mb-4">
						<div>
							<strong>Expiration date</strong>
						</div>
						{props.file.expiresAt}
					</li>
					<li className="mb-4">
						<div>
							<strong>Owner</strong>
						</div>
						{props.file.userId}
					</li>
				</ul>
			</div>
		</section>
	)
}
