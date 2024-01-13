import { Sidebar } from "@/components/sidebar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full relative">
			<div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
				<Sidebar isPro={false} apiLimitCount={0} />
			</div>
			<main className="h-full bg-[#111827] overflow-auto">
				<div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
			</main>
		</div>
	);
};

export default LandingLayout;
