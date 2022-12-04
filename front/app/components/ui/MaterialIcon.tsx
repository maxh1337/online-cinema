import * as MaterialIcons from 'react-icons/md'

import { FC } from 'react'
import { TypeMaterialIconName } from '@/shared/types/icon.types'


const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {

	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon