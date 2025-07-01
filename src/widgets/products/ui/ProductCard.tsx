import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ArrowButton from './ArrowButton'

interface ProductCardProps {
	title: string
	link: string
	imageUrl: string
}

const ProductCard: FC<ProductCardProps> = ({ title, imageUrl, link }) => {
	return (
		<Link
			href={link}
			className='group block p-xs border border-dark rounded-sm aspect-[3/4] transition-primary  hover:scale-[0.99]'
		>
			<article className='relative overflow-hidden flex h-full rounded-xs'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
					className='absolute z-[10] object-cover transition-primary'
				/>
				<div className='absolute inset-0 z-[11] bg-[linear-gradient(180deg,rgba(0,0,0,0.6)0%,rgba(55,55,55,0)50%,rgba(0,0,0,0.3)100%)]' />
				<div className='relative z-[12] flex flex-col justify-between h-full w-full px-xs pt-xs pb-sm lg:px-sm lg:pt-sm lg:pb-md'>
					<div className='flex flex-col gap-xxs'>
						<h3 className='font-inter font-semibold text-xl text-light xs:text-lg sm:text-xl lg:text-lg'>
							{title}
						</h3>
						{/* <p className='text-primary underline text-md'>Подробнее</p> */}
					</div>

					<div className='mt-auto w-full flex justify-end opacity-100 transition-primary pointer-events-none md:opacity-0 group-hover:opacity-100'>
						<ArrowButton />
					</div>
				</div>
			</article>
		</Link>
	)
}

export default ProductCard
