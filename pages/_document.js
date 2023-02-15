import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
	return (
        <Html>
            <Head>
				<link
					rel="icon"
					type="image"
					href="../bootstrap/images/PNG.png"
					sizes="192x192"
				/>
			
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
