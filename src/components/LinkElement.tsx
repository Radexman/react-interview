type LinkElementProps = {
	text: string;
	redirect: boolean;
};

const LinkElement = ({ text, redirect }: LinkElementProps) => {
	const address = 'https://zrozumiecreact.pl';
	return (
		<a
			href={address}
			target={redirect ? '_blank' : '_self'}
			rel={redirect ? 'noopener noreferrer' : undefined}
		>
			{text}
		</a>
	);
};

export default LinkElement;
