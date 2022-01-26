import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SendButton = ({ placeholder, sendMessage }) => {
	const input = useRef();

	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			SubmitMessage();
		}
	};

	const SubmitMessage = async () => {
		const message = input.current.value;
		if (message.trim().length > 0) {
			const d = new Date();
			const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
			const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

			const h = (d.getHours() < 10 ? '0' : '') + d.getHours();
			const m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

			const random = Math.floor(Math.random() * 2) === 1 ? false : true;

			const data = {
				id: new Date().valueOf(),
				content: message,
				time: `${h}:${m}`,
				date: `${da}-${mo}`,
				isIncoming: random,
				imgSrc: 'https://picsum.photos/200',
			};
			sendMessage(data);
			setTimeout(() => {
				input.current.value = '';
			}, 50);
		}
	};
	return (
		<div className='type_msg'>
			<div className='input_msg_write'>
				<textarea onKeyPress={handleKeyPress} type='submit' ref={input} className='write_msg' placeholder={placeholder}></textarea>
				<FontAwesomeIcon
					icon={faPaperPlane}
					className='msgSendButton'
					onClick={() => {
						SubmitMessage();
					}}
				/>
			</div>
		</div>
	);
};

export default SendButton;
