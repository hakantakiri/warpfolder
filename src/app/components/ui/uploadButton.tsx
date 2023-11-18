interface PrimaryButtonProps {
	text: string
	w?: number
	h?: number
	onClick?: () => any
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<button
			className="flex justify-center items-center h-30 w-60 p-4 
            shadow-xl border-2 rounded-3xl text-white
            border-blue-400 bg-blue-400
            hover:bg-blue-700 hover:border-blue-700
            active:shadow-md


"
			onClick={props.onClick}
		>
			{props.text}
		</button>
	)
}
