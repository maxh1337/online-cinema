import { FC } from 'react'
import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies'
import FavoriteMovies
	from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer