const Message = ({ content, time, date, imgSrc, isIncoming }) => {
	if (isIncoming === true) {
		return (
			<div className='incoming_msg'>
				<div className='incoming_msg_img'>
					<img src={imgSrc} alt='profile picture' />
				</div>
				<div className='received_msg'>
					<div className='received_withd_msg msg'>
						<p>{content}</p>
						<span className='time_date'>
							{time} | {date}
						</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='outgoing_msg'>
			<div className='sent_msg msg'>
				<p>{content}</p>
				<span className='time_date'>
					{time} | {date}
				</span>
			</div>
		</div>
	);
};

export default Message;
