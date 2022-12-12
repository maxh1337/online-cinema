import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IMovieEditInput } from '@/components/screens/admin/movies/movie/movie-edit.interface'
import { useAdminActors } from '@/components/screens/admin/movies/movie/useAdminActors'
import { useAdminGenres } from '@/components/screens/admin/movies/movie/useAdminGenres'
import { useMovieEdit } from '@/components/screens/admin/movies/movie/useMovieEdit'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/uploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import FormStyles from '../../../../ui/form-elements/admin-form.module.scss'

const DynamicSelect = dynamic(() => import('../../../../ui/select/Select'), {
	ssr: false,
})

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)
	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
			<form onSubmit={handleSubmit(onSubmit)} className={FormStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={FormStyles.fields}>
							<Field
								{...register('title', {
									required: 'Title is required!',
								})}
								placeholder="Title"
								error={errors.title}
							/>
							<SlugField
								register={register}
								generate={() =>
									setValue('slug', generateSlug(getValues('title')))
								}
								error={errors.slug}
							/>
							<Field
								{...register('parameters.country', {
									required: 'Country is required!',
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.duration', {
									required: 'Country is required!',
								})}
								placeholder="Duration"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.year', {
									required: 'Country is required!',
								})}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>

							{/*	React Select*/}
							<Controller
								name="genres"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isMulti
										isLoading={isGenresLoading}
										placeholder="Genres"
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one genre!',
								}}
							/>

							<Controller
								name="actors"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isMulti
										isLoading={isActorsLoading}
										placeholder="Actors"
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one actor!',
								}}
							/>
							{/*	React Select*/}
							<Controller
								name="poster"
								control={control}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										placeholder="Poster"
										error={error}
										folder="movies"
										image={value}
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								name="bigPoster"
								control={control}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										placeholder="Big Poster"
										error={error}
										folder="movies"
										image={value}
									/>
								)}
								rules={{
									required: 'Big Poster is required',
								}}
							/>
							<Controller
								name="videoUrl"
								control={control}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										placeholder="Video"
										error={error}
										folder="movies"
										image={value}
										isNoImage
									/>
								)}
								rules={{
									required: 'Video is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
