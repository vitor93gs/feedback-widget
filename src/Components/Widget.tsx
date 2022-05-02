import { useState } from 'react';

import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
	const [pressed, setPressed] = useState(false);
	return (
		<div className="absolute bottom-6 right-6">
			<p >Hello World</p>
			<button className="bg-red-700 rounded-full px-3 h-12 text-white flex items-center group">
				<ChatTeardropDots className="w-6 h-6" />
				<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700">
					Feedback
				</span>
			</button>
		</div>
	);
}
