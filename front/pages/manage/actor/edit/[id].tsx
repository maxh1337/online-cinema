import ActorEdit from '@/components/screens/admin/actors/actor/ActorEdit'
import GenreEdit from '@/components/screens/admin/genres/genre/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.type'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isOnlyAdmin = true
export default ActorEditPage
