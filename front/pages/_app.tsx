import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'
import '@/assets/styles/react-select.scss'

import { TypeComponentAuthFields } from '@/shared/types/auth.type'

import MainProvider from '../app/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
