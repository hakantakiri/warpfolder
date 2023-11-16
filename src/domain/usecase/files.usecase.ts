import File from "../models/File.model"

const getFiles = async (): Promise<File[]> => {
	const files: File[] = [
		{
			fileId: "adl;kff389hfp3",
			name: "image.png",
			previewUrl: "asdfasdf",
			uploaded: "11234qerqw",
			expiresAt: "41234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "adl;kff389hasasdf",
			name: "document.txt",
			previewUrl: "asdfasdf",
			uploaded: "21234qerqw",
			expiresAt: "31234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "983479b3kff389hfp3",
			name: "video.mp4",
			previewUrl: "asdfasdf",
			uploaded: "31234qerqw",
			expiresAt: "21234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "jdfjfjfdjfdj0fe0",
			name: "audio.mp3",
			previewUrl: "audi8383",
			uploaded: "41234qerqw",
			expiresAt: "11234qerqw",
			userId: "dfjaodifj0",
		},
	]

	return files
}

export { getFiles }
