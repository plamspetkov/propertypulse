'use client';
import React from 'react';
import { BounceLoader } from 'react-spinners';

const override = {
	display: 'block',
	margin: '100px auto',
};

const LoadingPage = ({}) => {
	return (
		<BounceLoader
			color="#3b82f6"
			size={100}
			loading={true}
			cssOverride={override}
			speedMultiplier={2}
			aria-label="Loading Spinner..."
		/>
	);
};

export default LoadingPage;
