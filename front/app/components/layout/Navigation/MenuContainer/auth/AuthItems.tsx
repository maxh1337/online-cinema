import { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { LogoutButton } from '@/components/layout/Navigation/MenuContainer/auth/LogoutButton'

import { getAdminHomeUrl } from '@/config/url.config'

import { useAuth } from '@/hooks/useAuth'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							title: 'Profile',
							link: '/profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						title: 'Login',
						link: '/auth',
					}}
				/>
			)}
			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						title: 'Admin panel',
						link: getAdminHomeUrl(),
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
