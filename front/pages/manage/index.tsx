import { NextPage } from 'next'

import Admin from '@/components/screens/admin/Admin'

import { NextPageAuth } from '@/shared/types/auth.type'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
