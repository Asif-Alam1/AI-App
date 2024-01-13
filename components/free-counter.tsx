import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { MAX_FREE_COUNTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";

export const FreeCounter = ({
	isPro = false,
	apiLimitCount = 0,
}: {
	isPro: boolean;
	apiLimitCount: number;
}) => {
	const [mounted, setMounted] = useState(false);
	const proModal = useProModal();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	if (isPro) {
		return (
			<div className="flex items-center justify-center gap-x-2 font-bold text-xl">
				<Badge
					variant="premium"
					className="text-2xl right-2 px-12 py-4  text-center"
				>
					Genius Pro
				</Badge>
			</div>
		);
	}

	return (
		<div className="px-3">
			<Card className="bg-primary/10 border-0">
				<CardContent className="py-6">
					<div className="text-center text-white font-semibold mb-4 space-y-2">
						<p>
							{apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
						</p>
						<Progress
							className="h-3"
							color="#F87171"
							value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
						/>
					</div>
					<Button
						onClick={proModal.onOpen}
						variant="premium"
						className="w-full"
					>
						Upgrade
						<Zap className="w-4 h-4 ml-2 fill-white" />
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};
