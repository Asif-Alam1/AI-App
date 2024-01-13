"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("b35790d3-17ac-4f2d-911f-3d81952645b0");
	}, []);

	return null;
};
