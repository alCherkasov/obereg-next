'use client'

import useFancybox from '@/shared/hooks/useFancybox'
import { Heading } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'
import { galleryConfig } from '../config/galleryConfig'

const Gallery = () => {
	const [fancyboxRef] = useFancybox({})
	return (
		<section id='photos' className='flex flex-col gap-md'>
			<Heading level='2'>Наши работы</Heading>
			<div
				className='grid grid-cols-1 gap-sm sm:grid-cols-2 md:grid-cols-3'
				ref={fancyboxRef}
			>
				{galleryConfig.map(photo => (
					<Link
						data-fancybox='gallery'
						key={photo.id}
						href={photo.url}
						className='relative block overflow-hidden rounded-sm object-fit aspect-[4/3]'
					>
						<Image
							src={photo.url}
							alt={photo.title}
							sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
							fill
							className='object-fit aspect-auto'
						/>
					</Link>
				))}
			</div>
		</section>
	)
}

export default Gallery
