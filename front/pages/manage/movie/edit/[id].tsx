import MovieEdit from '@/components/screens/admin/movies/movie/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.type'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isOnlyAdmin = true
export default MovieEditPage
