'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useSwiper } from 'swiper/react'

interface CarouselButtonProps {
	alt: string
	direction: 'prev' | 'next'
}
const CarouselButton = ({ alt, direction = 'next' }: CarouselButtonProps) => {
	const swiper = useSwiper()
	const base =
		'opacity-70 flex items-center justify-center w-[50px] h-[50px] rounded-xs bg-light  transition-primary cursor-pointer hover:opacity-100 active:opacity-100'
	const CarouselButtonClass = clsx(base, {
		['rotate-180']: direction === 'prev',
		['rotate-0']: direction === 'next',
	})
	return (
		<button
			className={CarouselButtonClass}
			onClick={
				direction === 'next'
					? () => swiper.slideNext()
					: () => swiper.slidePrev()
			}
		>
			<Image
				src={'/icons/arrow.svg'}
				alt={alt}
				width={24}
				height={24}
				className='w-[24px] h-[24px]'
			/>
		</button>
	)
}

export default CarouselButton
