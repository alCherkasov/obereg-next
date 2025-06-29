import { Badge, Heading } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ProductCardProps {
	title: string
	link: string
	imageUrl: string
	badge?: 'best-seller' | undefined
}

const ProductCard: FC<ProductCardProps> = ({
	title,
	imageUrl,
	link,
	badge,
}) => {
	return (
		<Link
			href={link}
			className='group block overflow-hidden rounded-sm transition-primary hover:scale-[0.99]'
		>
			<article className='relative aspect-[3/4]'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
					className='absolute z-[10] object-cover transition-primary group-hover:scale-[1.04]'
				/>
				<div className='absolute inset-0 z-[11] bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_24.52%,_rgba(26,26,26,0)_100%)]' />
				<div className='relative z-[12] flex flex-col justify-between h-full w-full px-xs pt-xs pb-sm lg:px-sm lg:pt-sm lg:pb-md'>
					<div className='flex flex-col gap-xxs'>
						<Heading level='3' color='light'>
							{title}
						</Heading>
						<p className='text-primary underline text-xs'>Подробнее</p>
					</div>
					<div className='mt-auto self-start'>{badge && <Badge />}</div>
				</div>
			</article>
		</Link>
	)
}

export default ProductCard
