import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(['Muito bom!']),
		  [newCommentText, SetNewCommentText] = useState('');

	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	});

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const handleCreateNewComment = (e) => {
		e.preventDefault();
		setComments([...comments, newCommentText]);
		SetNewCommentText('');
	};

	const handleNewCommentChange = (e) => {
		SetNewCommentText(e.target.value);
	}

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar hasBorder src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map(line => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === 'link') {
						return <p key={line.content}><a href={line.content}>{line.linkName}</a></p>
					}
				})}
				{/* <p>
					<a href="">#designsystem</a>{' '}
					<a href="">#storybook</a>{' '}
					<a href="">#react</a>{' '}
					<a href="">#typescript</a>
				</p> */}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea 
					name="comment"
					placeholder="Deixe um comentário" 
					value={newCommentText}
					onChange={handleNewCommentChange} 
				/>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map(comment => {
					return <Comment key={comment} content={comment} />
				})}
			</div>
		</article>
	)
};