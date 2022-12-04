import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href='/' legacyBehavior={true}>
			<a className='px-layout mb-10 block'>
				<Image src={logo} alt='logo' width={247} height={34} draggable={false} />
			</a>
		</Link>
	)
}

export default Logo