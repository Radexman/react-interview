type LinkElementProps = {
	text: string;
};

type SpanElementProps = {
	text: string;
};

const LinkElement = ({ text }: LinkElementProps) => {
	return (
		<a
			href='https://zrozumiecreact.pl'
			target='_blank'
			rel='noopener noreferrer'
		>
			{text}
		</a>
	);
};

export const SpanElement = ({ text }: SpanElementProps) => {
	return <span>{text}</span>;
};

export default LinkElement;
