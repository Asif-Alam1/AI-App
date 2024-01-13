import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Genius",
	description: "AI Platform",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/logo.png",
				href: "/logo.png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/logo.png",
				href: "/logo.png",
			},
		],
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<link rel="icon" href="/logo.png" />
				<CrispProvider />
				<body className={font.className}>
					<ToasterProvider />
					<ModalProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
