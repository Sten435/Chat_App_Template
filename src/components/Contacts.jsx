const Contacts = ({ id, name, date, last_msg, imgSrc, isActive }) => {
	return (
		<div key={id} className={`chat_list ${isActive ? 'active_chat' : null}`}>
			<div className='chat_people'>
				<div className='chat_img'>
					<div className='ContactList_image' style={{ backgroundImage: `url(${imgSrc})` }} alt='profile picture'></div>
				</div>
				<div className='chat_ib'>
					<h5>
						{name}
						<span className='chat_date'>{date}</span>
					</h5>
					<p className='last_msg'>{last_msg}</p>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
