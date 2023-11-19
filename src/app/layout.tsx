import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Warp folder",
	description: "Temporarily save files in another dimention",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<meta
				name="viewport"
				content="width=device-width, height=device-height, initial-scale=1.0"
			/>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
