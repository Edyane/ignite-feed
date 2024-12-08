import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';
import './global.css';
import styles from './App.module.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/edyane.png',
			name: 'Edyane',
			role: 'Front-end Developer'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'Acabei de publicar mais um projeto para o meu GitHub. Neste projeto aprendi como construir um design system utilizando React.js, TypeScript e Storybook 🚀' },
			{ type: 'link', linkName: 'Luna Design System', content: 'https://github.com/Edyane/luna-ui' },
		],
		publishedAt: new Date('2024-11-12 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/lyarkh.png',
			name: 'Lucas',
			role: 'Software Engineer'
		},
		content: [
			{ type: 'paragraph', content: 'Olá, pessoal! 👋' },
			{ type: 'paragraph', content: 'Gostaria de compartilhar com vocês o The Helper Guide, este repositório foi construído com o intuito de compartilhar estudos, comandos e esclarecer dúvidas sobre várias tecnologias e assuntos presentes no mundo Dev/Tech. 🚀' },
			{ type: 'link',  linkName: 'The Helper Guide', content: 'https://github.com/Lyarkh/The_Helper_Guide' },
		],
		publishedAt: new Date('2024-11-11 20:00:00'),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<aside>
					<Sidebar />
				</aside>
				<main>
					{posts.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>
		</div>
	)
};
