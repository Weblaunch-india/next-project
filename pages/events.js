import React from "react";
import { Navbar } from "../components/Navbar";
import { Events } from "../components/Events";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const events = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<Events />
			</div>
		</QueryClientProvider>
	);
};

export default events;
