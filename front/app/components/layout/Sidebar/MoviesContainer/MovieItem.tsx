import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { MaterialIcon } from '@/components/ui/MaterialIcon'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)} legacyBehavior>
				<a>
					<Image
						draggable={false}
						alt={movie.title}
						width={65}
						height={97}
						src={movie.poster}
						priority={true}
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, idx) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)} legacyBehavior>
							<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
						</Link>
					))}
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
