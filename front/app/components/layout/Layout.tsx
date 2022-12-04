import { FC } from 'react'

import styles from './Layout.module.scss'
import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'

const Layout: FC<any> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout