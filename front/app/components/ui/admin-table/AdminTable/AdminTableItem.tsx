import { FC } from 'react'

import AdminActions from '@/components/ui/admin-table/AdminTable/AdminActions/AdminActions'
import { IAdminTableItem } from '@/components/ui/admin-table/AdminTable/admin-table.interface'

import styles from './AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value, idx) => (
				<div key={idx + 1}>{value}</div>
			))}
			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	)
}

export default AdminTableItem
