import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IMovieEditInput } from '@/components/screens/admin/movies/movie/movie-edit.interface'

import { getAdminUrl } from '@/config/url.config'

import { MovieService } from '@/services/movie.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter()

	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					// @ts-ignore
					setValue(key, data[key]) // check use genre edit to fix problem
				})
			},
			onError: (error) => {
				toastError(error, 'Get movie')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'Update movie',
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			onError: (error) => {
				toastError(error, 'Update movie')
			},
			onSuccess: () => {
				toastr.success('Update movie', 'Movie has been successfully updated')
				push(getAdminUrl('movies'))
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
