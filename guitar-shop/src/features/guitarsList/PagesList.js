import React from 'react';

const PagesList = () => {
	return (
		<div>
			<ul className='flex'>
				<li
					className='flex items-center justify-center border border-r-0 w-12 h-12 hover:cursor-pointer'
					onClick={null}
				>
					1
				</li>
				<li
					className='flex items-center justify-center border border-r-0 w-12 h-12 hover:cursor-pointer'
					onClick={null}
				>
					2
				</li>
				<li
					className='flex items-center justify-center border border-r-0 w-12 h-12 hover:cursor-pointer'
					onClick={null}
				>
					3
				</li>
				<li
					className='flex items-center justify-center border w-12 h-12 hover:cursor-pointer'
					onClick={null}
				>
					4
				</li>
			</ul>
		</div>
	);
};

export default PagesList;
