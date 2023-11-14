import File from "../models/File.model"

const getFiles = async (): Promise<File[]> => {
	const files: File[] = [
		{
			fileId: "adl;kff389hfp3",
			name: "image.png",
			previewUrl: "asdfasdf",
			uploaded: "1234qerqw",
			expiresAt: "1234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "adl;kff389hasasdf",
			name: "document.txt",
			previewUrl: "asdfasdf",
			uploaded: "1234qerqw",
			expiresAt: "1234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "983479b3kff389hfp3",
			name: "video.mp4",
			previewUrl: "asdfasdf",
			uploaded: "1234qerqw",
			expiresAt: "1234qerqw",
			userId: "sdlafjkhalskdjfhlaksdjhf",
		},
		{
			fileId: "jdfjfjfdjfdj0fe0",
			name: "audio.mp3",
			previewUrl: "audi8383",
			uploaded: "1234qerqw",
			expiresAt: "1234qerqw",
			userId: "dfjaodifj0",
		},
	]

	return files
}

export { getFiles }
