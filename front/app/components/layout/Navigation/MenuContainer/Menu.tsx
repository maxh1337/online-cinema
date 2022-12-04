import { FC } from 'react'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'
import styles from './Menu.module.scss'
import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import AuthItems from '@/components/layout/Navigation/MenuContainer/auth/AuthItems'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map(item => {
					return (
						<MenuItem item={item} key={item.link} />
					)
				})}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu