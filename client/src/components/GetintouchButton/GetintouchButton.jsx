import React from 'react';
import "./GetintouchButton.css"

const GetintouchButton = ({title}) => {
	return (
		<div>

			<button className="button">
				{title}
				<div className="hoverEffect">
					<div></div>
				</div>
			</button>

		</div>
	);
};

export default GetintouchButton;