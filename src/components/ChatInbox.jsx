import Contacts from './Contacts';

const ChatInbox = ({ ChatInbox }) => {
	return (
		<div className='inbox_chat'>
			{ChatInbox.map(({ id, name, isActive, date, last_msg, imgSrc }) => {
				return <Contacts key={id} name={name} isActive={isActive} date={date} last_msg={last_msg} imgSrc={imgSrc} />;
			})}
		</div>
	);
};

export default ChatInbox;
