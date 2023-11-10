"use client"
import sessionUsecase from "@/domain/usecase/session.usecase"
import { useEffect } from "react"
import { Navbar } from "./components/navbar/Navbar"
import { PrimaryButton } from "./components/uploadButton/uploadButton"
import TreedotSvg from "./components//icons/threedot.svg"
import Image from "next/image"

export default function Home() {
	useEffect(() => {
		const sessionId: string = sessionUsecase.getSession()
		console.log(sessionId)
	}, [])

	const files = [
		{
			fileId: "adl;kff389hfp3",
			name: "document.txt",
			preview: "asdfasdf",
			uplaoded: "1234qerqw",
			expiresAt: "1234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "adl;kff389hasasdf",
			name: "document.txt",
			preview: "asdfasdf",
			uplaoded: "1234qerqw",
			expiresAt: "1234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "983479b3kff389hfp3",
			name: "document.txt",
			preview: "asdfasdf",
			uplaoded: "1234qerqw",
			expiresAt: "1234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
	]

	return (
		<>
			<Navbar />
			<main>
				<section className="flex justify-center space-x-8 p-16">
					<PrimaryButton
						onClick={() => console.log("hey")}
						text={"UPLOAD"}
					/>
					<PrimaryButton text={"SHARE"} />
				</section>
				<section className="container mx-auto">
					<table className="min-w-full">
						<thead>
							<tr className="text-left">
								<th className="p-8 w-1/2">Name</th>
								<th className="p-8">Uploaded</th>
								<th className="p-8">Expires</th>
								<th className="p-8 px-12">
									<Image src={TreedotSvg} alt="sandwich" />
								</th>
							</tr>
						</thead>
						<tbody>
							{files.map((file) => (
								<tr
									key={file.fileId}
									className="h-24 hover:bg-gray-50 hover:cursor-pointer"
								>
									<td className="px-8"> {file.name}</td>
									<td className="px-8"> {file.uplaoded}</td>
									<td className="px-8"> {file.expiresAt}</td>
									<td className="px-8">
										<button
											className="flex justify-center items-center p-4 
                      border-2 rounded-xl border-transparent  
                       hover:bg-indigo-50 hover:border-indigo-50
                       active:border-gray-500
                    "
										>
											<Image
												src={TreedotSvg}
												alt="Menu"
											/>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			</main>
		</>
	)
}
