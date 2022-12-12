import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { IUploadField } from '@/components/ui/form-elements/form.interface'
import { useUpload } from '@/components/ui/form-elements/uploadField/useUpload'

import styles from '../form.module.scss'

const UploadField: FC<IUploadField> = ({
	onChange,
	error,
	folder,
	image,
	isNoImage = false,
	style,
	placeholder,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							image && <Image src={image} alt="" fill unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
