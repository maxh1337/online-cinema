import { FC } from 'react'
import { useQuery } from 'react-query'

import Gallery from '@/components/ui/gallery/Gallery'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'
import Slider from '@/components/ui/slider/Slider'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { getActorsUrl } from '@/config/api.config'
import { getMovieUrl } from '@/config/url.config'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import Meta from '@/utils/meta/Meta'
import { getGenresList } from '@/utils/movie/getGenresList'

import Actors from '../../../../pages/manage/actors'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	//Костыль Next js 13 GetStaticProps не работает корректно

	const { data: movies } = useQuery('Slides', () =>
		MovieService.getAll().then((data) => data.data)
	)

	const { data: dataActors } = useQuery('Actors', () =>
		ActorService.getAll().then((data) => data.data)
	)

	// @ts-ignore
	const actors: IGalleryItem = dataActors?.slice(0, 7).map((actor) => ({
		link: getActorsUrl(actor.slug),
		name: actor.name,
		posterPath: actor.photo,
		content: {
			title: actor.name,
			subTitle: `+${actor.countMovies} movies`,
		},
	}))

	// @ts-ignore
	const slides: ISlide[] = movies?.slice(0, 3).map((movie) => ({
		_id: movie._id,
		link: getMovieUrl(movie.slug),
		bigPoster: movie.bigPoster,
		subTitle: getGenresList(movie.genres),
		title: movie.title,
		posterPath: movie.bigPoster,
		name: movie.title,
	}))

	const trendingMovies = slides

	// @ts-ignore
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies and TV shows online or stream right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-600 mb-8 text-xl	"
			/>
			{slides?.length && <Slider slides={slides} />}
			<div className="my-10">
				<SubHeading title="Trending now" />
				{/*{trendingMovies?.length && <Gallery items={trendingMovies} />}*/}
			</div>
			<div className="my-10">
				<SubHeading title="Best actors" />
				{/*{actors?.length && <Gallery items={actors} />}*/}
			</div>
		</Meta>
	)
}

export default Home
