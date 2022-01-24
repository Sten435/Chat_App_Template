import { useEffect, useState } from 'react';
import ChatInbox from './ChatInbox';
import ChatMessages from './ChatMessages';
import SendButton from './SendButton';
import ContextMenu from './ContextMenu';

function App() {
	const MessageDATA = [
		{
			id: 1,
			content: 'om een font-catalogus te',
			time: '15:07',
			date: '01 Dec',
			isIncoming: false,
			imgSrc: 'https://picsum.photos/200',
		},
		{
			id: 2,
			content: 'om een font-catalogus te',
			time: '15:07',
			date: '01 Dec',
			isIncoming: false,
			imgSrc: 'https://picsum.photos/200',
		},
		{
			id: 3,
			content: 'om een font-catalogus te',
			time: '15:07',
			date: '01 Dec',
			isIncoming: true,
			imgSrc: 'https://picsum.photos/200',
		},
		{
			id: 4,
			content: 'om een font-catalogus te',
			time: '15:07',
			date: '01 Dec',
			isIncoming: false,
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
		{
			id: 2,
			isActive: false,
			name: 'A',
			date: '19 Feb',
			last_msg: 'ijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock',
			imgSrc: 'https://picsum.photos/200',
		},
		{
			id: 3,
			isActive: false,
			name: 'Niffo',
			date: '02 Mar',
			last_msg: 'psum gaat gebruiken dient u zich ervan te verzekeren dat er niets beschamends ',
			imgSrc: 'https://picsum.photos/200',
		},
		{
			id: 4,
			isActive: false,
			name: 'Huts',
			date: '28 Jun',
			last_msg: 'aliquet neque, sed maximus eros rhoncus id. Quisque consequat mi nec iaculis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Donec gravida tristique ante, blandit pellentesque nisi ullamcorper ut. Praesent elementum vehicula ligula, sed ullamcorper arcu bla',
			imgSrc: 'https://picsum.photos/200',
		},
		{
			id: 5,
			isActive: false,
			name: 'Niffo',
			date: '29 Dec',
			last_msg: 'spendisse potenti. Fusce sit amet lorem quam. Etiam tincidunt tempor dui ut placerat. Sed suscipit est velit. Praesent aliquet mi sed tincidunt dapibus. Donec co',
			imgSrc: 'https://picsum.photos/200',
		},
	];

	const [Message, setMessages] = useState(JSON.parse(localStorage.getItem('messages')) || MessageDATA);

	const updateMesseges = (data) => {
		localStorage.setItem('messages', JSON.stringify([...Message, data]));
		setMessages([...Message, data]);
	};

	useEffect(() => {
		document.onclick = () => {
			document.getElementById('contextMenu').style.display = 'none';
		};
	});

	return (
		<>
			<ContextMenu />
			<div className='messaging'>
				<div className='inbox_msg'>
					<div className='inbox_people'>
						<div className='headind_srch'>
							<div className='recent_heading'>
								<h4>Recent</h4>
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
