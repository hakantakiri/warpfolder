import Image from "next/image"
import DeleteSvg from "../../components/icons/delete.svg"
import sessionUsecase from "@/app/domain/usecase/session.usecase"

export const SideBar = () => {
	return (
		<section
			className="flex flex-col sticky top-0 bottom-0 left-0 h-screen justify-between
        				bg-gray-800 text-white p-4 "
		>
			<div>top</div>
			<div>
				<ul>
					<li>
						<button
							className="flex p-4 space-x-4"
							onClick={() => {
								sessionUsecase.signOut()
							}}
						>
							<Image src={DeleteSvg} alt="Delete" />
							<span>Detach folder</span>
						</button>
					</li>
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
