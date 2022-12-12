import ActorList from '@/components/screens/admin/actors/ActorList'

import { NextPageAuth } from '@/shared/types/auth.type'

const ActorListPage: NextPageAuth = () => {
	return <ActorList />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage
