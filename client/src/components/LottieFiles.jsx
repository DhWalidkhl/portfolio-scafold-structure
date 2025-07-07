import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieFiles = () => {
	return (
		<div className="text-2xl">
			<DotLottieReact
				src="https://lottie.host/7aa2339a-33a2-4ebe-ac2e-80d520cc2af8/x3Cx3Zg9u1.lottie"
				loop
				autoplay
				style={{ width: 600, height: 400, textAlign: "center" }}
			/>
		</div>
	);
};

export default LottieFiles;
