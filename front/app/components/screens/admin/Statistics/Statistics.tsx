import { FC } from 'react'

import CountUsers from '@/components/screens/admin/Statistics/CountUsers'
import PopularMovie from '@/components/screens/admin/Statistics/PopularMovie'

import styles from '../Admin.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
