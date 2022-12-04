import { FC } from 'react'
import { IMovieList } from '@/components/layout/Sidebar/MoviesContainer/MovieList.interface'
import styles from './MovieList.module.scss'
import MovieItem from '@/components/layout/Sidebar/MoviesContainer/MovieItem'
import Link from 'next/link'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>
				{title}
			</div>
			{movies.map(movie =>
				<MovieItem key={movie._id} movie={movie} />,
			)}
			<Link href={link} legacyBehavior>
				<a className={styles.button}>
					See more
				</a>
			</Link>
		</div>
	)
}

export default MovieList