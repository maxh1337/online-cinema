import { FC } from 'react'
import styles from './Sidebar.module.scss'
import Search from '@/components/layout/Sidebar/Search/Search'
import MoviesContainer from '@/components/layout/Sidebar/MoviesContainer/MoviesContainer'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar