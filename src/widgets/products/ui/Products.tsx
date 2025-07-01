'use client'

import { CarouselButton, Heading } from '@/shared/ui'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCardConfig } from '../config/productsCardConfig'
import ProductCard from './ProductCard'

const Products = () => {
	return (
		<section id='products' className='flex flex-col gap-md'>
			<Heading level='2'>Наши решения</Heading>
			<div className=''>
				<Swiper
					modules={[Autoplay]}
					slidesPerView={1}
					spaceBetween={20}
					loop={true}
					// autoplay={true}
					breakpoints={{
						480: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
				>
					{ProductCardConfig.map(card => (
						<SwiperSlide key={card.id}>
							<ProductCard
								title={card.title}
								imageUrl={card.imageUrl}
								link={card.link}
							/>
						</SwiperSlide>
					))}
					<div className='absolute z-50 left-0 top-1/2 translate-y-[-50%] pl-sm opacity-100 transition-primary'>
						<CarouselButton alt='Предыдующий слайд' direction='prev' />
					</div>
					<div className='absolute z-50 right-0 top-1/2 translate-y-[-50%] pr-sm opacity-100 transition-primary'>
						<CarouselButton alt='Следующий слайд' direction='next' />
					</div>
				</Swiper>
			</div>
		</section>
	)
}

export default Products
