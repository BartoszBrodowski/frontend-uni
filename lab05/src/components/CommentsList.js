import { useState } from 'react';
const axios = require('axios');

const CommentsList = () => {
	const [commentsList, setCommentsList] = useState();
	axios.get('https://jsonplaceholder.typicode.com/comments');
	return (
		<ul>
			{commentsList.map((item, index) => {
				return <li key={index}>{item.name}</li>;
			})}
		</ul>
	);
};

export default CommentsList;
