import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import logo from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/" legacyBehavior={true}>
			<a className="px-layout mb-10 block">
				<Image
					src={logo}
					alt="logo"
					width={247}
					height={34}
					draggable={false}
					priority={true}
				/>
			</a>
		</Link>
	)
}

export default Logo