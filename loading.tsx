import React from "react";
import { Loader } from "./components/loader";

const loading = () => {
	return (
		<div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
			<Loader />
		</div>
	);
};

export default loading;
