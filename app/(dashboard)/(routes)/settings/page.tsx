import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { currentUser } from "@clerk/nextjs";
const SettingsPage = async () => {
	const isPro = await checkSubscription();
	const user = await currentUser();
	console.log(user);

	const firstName = user?.firstName;

	return (
		<div>
			<Heading
				title="Settings"
				description="Manage account settings."
				icon={Settings}
				iconColor="text-gray-700"
				bgColor="bg-gray-700/10"
			/>
			<div className="px-4 lg:px-8 space-y-4">
				<div className="text-muted-foreground text-xl">
					{firstName ? `Welcome, ${firstName}.` : "Welcome."}
				</div>
			</div>
			<div className="px-4 lg:px-8 space-y-4">
				<div className="text-muted-foreground text-xl">
					{isPro
						? "You are currently on a Pro plan."
						: "You are currently on a free plan."}
				</div>
				<SubscriptionButton isPro={isPro} />
			</div>
		</div>
	);
};

export default SettingsPage;
