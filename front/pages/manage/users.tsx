import UserList from '@/components/screens/admin/users/UserList'

import { NextPageAuth } from '@/shared/types/auth.type'

const UserListPage: NextPageAuth = () => {
	return <UserList />
}

UserListPage.isOnlyAdmin = true

export default UserListPage
