import { PrimaryButton } from "./uploadButton"

export const NoSessionHome = () => {
	return (
		<section className="flex items-center justify-center">
			<div className="flex flex-col items-center">
				<h1>Start by uploading your first file</h1>
				<PrimaryButton text="UPLOAD" />
				<hr></hr>
				<span>or open an existing warp folder</span>
				<PrimaryButton text="Open existing folder" />
			</div>
		</section>
	)
}
