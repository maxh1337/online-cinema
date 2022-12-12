import axios from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actors/actor/actor-edit.interface'
import { IGenreEditInput } from '@/components/screens/admin/genres/genre/genre-edit.interface'

import { getActorsUrl, getGenresUrl } from '@/config/api.config'

import { IActor } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getById(_id: string) {
		return axios.get<string>(getActorsUrl(`/${_id}`))
	},

	async create() {
		return axios.post<string>(getActorsUrl('/'))
	},

	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}
