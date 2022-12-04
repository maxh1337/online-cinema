import { FC } from 'react'
import styles from './SearchList.module.scss'
import { IMovie } from '@/shared/types/movie.types'
import Link from 'next/link'
import Image from 'next/image'
import { getMovieUrl } from '@/config/url.config'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? movies.map(movie => (
					<Link href={getMovieUrl(movie.slug)} key={movie._id} legacyBehavior={true}>
						<a>
							<Image src={movie.poster || ''} alt={movie.title} width={50} height={50}
										 style={{ objectFit: 'cover', objectPosition: 'top' }}
										 draggable={false} />
							<span>{movie.title}</span>
						</a>
					</Link>
				))
				: <div className='text-white text-center my-4'>Movies not found </div>
			}
		</div>
	)
}

export default SearchList