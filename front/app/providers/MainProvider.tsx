import { QueryClient, QueryClientProvider } from 'react-query'
import { FC, PropsWithChildren } from 'react'
import Layout from '@/components/layout/Layout'
import ReduxToast from './ReduxToast'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import HeadProvider from './HeadProvider/HeadProvider'


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const MainProvider: FC<any> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>
						{children}
					</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider