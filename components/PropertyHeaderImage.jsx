import Image from 'next/image';
import React from 'react';

const PropertyHeaderImage = ({ image }) => {
	return (
		<section>
			<div className="container-xl m-auto">
				<div className="grid grid-cols-1">
					<Image
						src={image}
						alt=""
						className="object-cover h-[400px] w-full"
						width={0}
						height={0}
						sizes="100vw"
						priority={true}
						// width="1800"
					/>
				</div>
			</div>
		</section>
	);
};

export default PropertyHeaderImage;
