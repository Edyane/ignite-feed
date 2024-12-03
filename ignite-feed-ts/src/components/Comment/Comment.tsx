import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    };

    const handleLikeComment = () => {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/lyarkh.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas</strong>
                            <time title="11 de novembro de 2024" dateTime="2024-11-11">
                                Há 1h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
};
