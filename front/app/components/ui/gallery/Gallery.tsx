import { FC } from 'react'

import GalleryItem from '@/components/ui/gallery/GalleryItem'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import styles from './Gallery.module.scss'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem item={item} variant="vertical" key={item.link} />
			))}
		</div>
	)
}

export default Gallery
