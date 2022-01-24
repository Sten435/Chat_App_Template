const ContextMenu = () => {
	return (
		<>
			<div id='contextMenu' className='context-menu' style={{ display: 'none' }}>
				<ul className='menu'>
					<li className='copy'>
						<a>
							<i className='fa fa-copy' aria-hidden='true'></i> Copy
						</a>
					</li>
					<li className='trash'>
						<a>
							<i className='fa fa-trash' aria-hidden='true'></i> Delete
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default ContextMenu;
