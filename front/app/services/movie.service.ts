import axios from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actors/actor/actor-edit.interface'
import { IMovieEditInput } from '@/components/screens/admin/movies/movie/movie-edit.interface'

import { getActorsUrl, getGenresUrl, getMoviesUrl } from '@/config/api.config'

import { IMovie } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},

	async getById(_id: string) {
		return axios.get<string>(getMoviesUrl(`/${_id}`))
	},

	async update(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async create() {
		return axios.post<string>(getMoviesUrl('/'))
	},

	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
}
