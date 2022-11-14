const CommentsList = ({ commentsList }) => {
	return (
		<ul>
			{commentsList?.map((item, index) => {
				return (
					<li key={index}>
						<div>Email:{item.email}</div>
						<div>Name: {item.name}</div>
					</li>
				);
			})}
		</ul>
	);
};

export default CommentsList;
