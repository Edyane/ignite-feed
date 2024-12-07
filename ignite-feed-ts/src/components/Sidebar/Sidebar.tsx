import { PencilLine } from 'phosphor-react';
import { Avatar } from '../../components/Avatar/Avatar';
import styles from './Sidebar.module.css';
import CardBackgroud from '../../assets/code-bg.avif';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
            <img className={styles.cover} src={CardBackgroud} alt="" />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/edyane.png" />
                <strong>Edyane</strong>
                <span>Front-end Developer</span>
            </div>

            <footer className={styles.footer}>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
	)
};
