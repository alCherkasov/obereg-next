'use client'

import { Heading } from '@/shared/ui'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCardConfig } from '../config/productsCardConfig'
import ProductCard from './ProductCard'

const Products = () => {
	return (
		<section id='products' className='flex flex-col gap-md'>
			<Heading level='2'>Мы строим</Heading>
			<div className=''>
				<Swiper
					modules={[Autoplay]}
					slidesPerView={2}
					spaceBetween={20}
					loop={true}
					// autoplay={true}
					breakpoints={{
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
								badge={card.badge}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Products
