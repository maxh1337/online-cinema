import { FC } from 'react'

import AdminNavItem from '@/components/ui/admin-navigation/AdminNavItem'
import { navItems } from '@/components/ui/admin-navigation/admin-navigation.data'

import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item, idx) => (
					<AdminNavItem item={item} key={idx} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
