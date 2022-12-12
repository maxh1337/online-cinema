import GenreEdit from '@/components/screens/admin/genres/genre/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.type'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit />
}

GenreEditPage.isOnlyAdmin = true
export default GenreEditPage
