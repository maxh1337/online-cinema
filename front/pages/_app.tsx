import '@/assets/styles/globals.scss'

import type { AppProps } from 'next/app'
import MainProvider from '../app/providers/MainProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}
