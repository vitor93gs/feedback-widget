interface ButtonProps {
	text?: string;
}

import { ChatTeardropDots } from 'phosphor-react';

export function Widget(props: ButtonProps) {
	return (
		<>
		<ChatTeardropDots size={300} weight="bold" />
		</>
		
	);
}
