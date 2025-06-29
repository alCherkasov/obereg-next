import { Button, Heading } from '@/shared/ui'
import Image from 'next/image'

const Hero = () => {
	return (
		<section>
			<div className='flex flex-col gap-sm sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:items-stretch'>
				<div className='flex flex-col gap-sm text-balance bg-light-gray px-xs pt-xs pb-md rounded-sm sm:px-sm sm:pt-sm md:text-wrap lg:text-balance'>
					<Heading level='1'>Каркасные и&nbsp;модульные дома под ключ</Heading>
					<p className='text-balance sm:text-sm lg:text-lg max-w-[380px]'>
						Каркасные и модульные дома с&nbsp;индивидуальной планировкой и&nbsp;
						монтажом от 60 дней
					</p>
					<div className='mt-sm flex gap-sm'>
						<Button alt='Написать нам'>Написать нам</Button>
					</div>
				</div>
				<div className='relative overflow-hidden rounded-sm aspect-[3/4] xs:aspect-[4/3] transition-primary sm:aspect-auto'>
					<Image
						className='w-full object-cover transition-primary hover:scale-[1.02]'
						src={'/img/hero/glamping.webp'}
						alt='Глэмпинг'
						fill
						sizes='(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw'
						priority
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
