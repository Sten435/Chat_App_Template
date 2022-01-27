import { useState } from 'react';
import ChatInbox from './ChatInbox';
import ChatMessages from './ChatMessages';
import SendButton from './SendButton';

function App() {
	const MessageDATA = [
		{
			id: 1,
			content: 'Hey how are you?',
			time: '15:07',
			date: '01 Dec',
			isIncoming: false,
			imgSrc: 'https://picsum.photos/200',
		},
		{
			id: 2,
			content: 'Good, thanks.',
			time: '15:09',
			date: '01 Dec',
			isIncoming: true,
			imgSrc: 'https://picsum.photos/200',
		},
	];

	const ChatInboxDATA = [
		{
			id: 1,
			isActive: true,
			name: 'Huts',
			date: '01 Aug',
			last_msg: 'nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet ',
			imgSrc: 'https://picsum.photos/200',
		},
	];

	const [Message, setMessages] = useState(JSON.parse(localStorage.getItem('messages')) || MessageDATA);

	const updateMesseges = (data) => {
		localStorage.setItem('messages', JSON.stringify([...Message, data]));
		setMessages([...Message, data]);
	};

	return (
		<>
			<div className='messaging'>
				<div className='inbox_msg'>
					<div className='inbox_people'>
						<div className='headind_srch'>
							<div className='recent_heading'>
								<h4>Chat App</h4>
							</div>
							<div className='srch_bar'>
								<div className='stylish-input-group'>
									<input type='text' className='search-bar' placeholder='Search' />
									<span className='input-group-addon'>
										<button type='button'>
											<i className='fa fa-search' aria-hidden='true'></i>
										</button>
									</span>
								</div>
							</div>
						</div>
						<ChatInbox ChatInbox={ChatInboxDATA} />
					</div>
					<div className='messages' id='messages'>
						<ChatMessages Messages={Message} />
						<SendButton placeholder='Aa' sendMessage={updateMesseges} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
