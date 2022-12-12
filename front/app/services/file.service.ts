import { IGenreEditInput } from '@/components/screens/admin/genres/genre/genre-edit.interface'

import { getGenresUrl } from '@/config/api.config'

import axios from '../api/interceptors'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axios.post<{ url: string; name: string }[]>(`/files`, file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
