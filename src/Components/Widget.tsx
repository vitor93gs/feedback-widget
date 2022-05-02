import { useState } from 'react';

import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
	const [pressed, setPressed] = useState(true);

	function togglePressed() {
		setPressed(!pressed);
	}

	return (
		<div className="absolute bottom-6 right-6">
			{!pressed ? <p>Hello World</p> : ""}
			<button
				className="bg-red-700 rounded-full px-3 h-12 text-white flex items-center group"
				onClick={togglePressed}
			>
				<ChatTeardropDots className="w-6 h-6" />
				<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700">
					Feedback
				</span>
			</button>
		</div>
	);
}
