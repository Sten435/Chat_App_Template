import Message from './Message';
import { useEffect, useRef } from 'react';

const ChatMessages = ({ Messages }) => {
	const msg_history = useRef();
	const scroller = useRef();

	useEffect(() => {
		scroller.current.scrollIntoView();
	}, [Messages]);

	return (
		<div className='msg_history' ref={msg_history}>
			{Messages.map((data) => {
				return <Message key={data.id} {...data} />;
			})}
			<div ref={scroller}></div>
		</div>
	);
};

export default ChatMessages;
