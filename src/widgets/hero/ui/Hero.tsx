'use client'

import { Button, CarouselButton, HappyClients, Heading } from '@/shared/ui'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Hero = () => {
	return (
		<section>
			<div className='grid grid-rows-2 grid-cols-1 gap-sm sm:grid sm:grid-cols-2 sm:grid-rows-1'>
				<div className='flex flex-col gap-sm text-balance bg-light-gray px-xs pt-xs pb-md rounded-sm sm:px-sm sm:pt-sm md:text-wrap lg:text-balance'>
					<Heading level='1'>Каркасные и&nbsp;модульные дома под ключ</Heading>
					<p className='text-balance sm:text-sm lg:text-lg max-w-[380px]'>
						Каркасные и модульные дома с&nbsp;индивидуальной планировкой и&nbsp;
						монтажом от 60 дней
					</p>
					<div className='mt-sm flex gap-sm flex-wrap'>
						<Button alt='Написать нам'>Написать нам</Button>
						<HappyClients />
					</div>
				</div>
				<div className='group relative overflow-hidden flex h-full rounded-sm transition-primary'>
					<Swiper modules={[Autoplay]} loop autoplay={true}>
						<SwiperSlide>
							<div className='bg-secondary-light w-full h-full p-sm'>
								<h2 className='text-xl font-semibold'>Какое-то предложение</h2>
								<p>Место под баннер</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='bg-primary-light w-full h-full p-sm'>
								<h2 className='text-xl font-semibold'>Какое-то предложение</h2>
								<p>Место под баннер</p>
							</div>
						</SwiperSlide>
						<div className='absolute z-50 top-1/2 px-sm w-full flex justify-between items-center opacity-100 transition-primary group-hover:opacity-100 md:opacity-0'>
							<CarouselButton alt='Предыдующий слайд' direction='prev' />
							<CarouselButton alt='Следующий слайд' direction='next' />
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Hero
