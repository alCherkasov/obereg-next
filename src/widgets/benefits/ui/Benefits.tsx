import { Heading } from '@/shared/ui'
import Image from 'next/image'
import { benefitsConfig } from '../config/benefitsConfig'

const Benefits = () => {
	return (
		<section
			id='benefits'
			className='relative overflow-hidden w-full px-xs pt-sm pb-md md:px-sm md:pb-md lg:p-md lg:min-h-[420px] rounded-sm bg-secondary-light'
		>
			<div className='flex flex-col justify-between gap-sm lg:gap-lg lg:flex-row'>
				<div className=''>
					<h2 className='text-xl font-semibold xl:text-xxl xl:leading-[1.3]'>
						Почему
						<br />
						выбирают
						<br />
						нас
					</h2>
				</div>
				<div className='flex flex-col gap-sm xs:grid xs:grid-cols-2 xs:grid-rows-2'>
					{benefitsConfig.map(benefit => (
						<div
							key={benefit.title}
							className='flex flex-col gap-xxs max-w-[350px] text-balance'
						>
							<Heading level='3'>{benefit.title}</Heading>
							<p className='text-balance text-sm md:text-base'>
								{benefit.text}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className='absolute top-[-8px] right-[-8px] rotate-[-120deg] w-[116px] h-[116px] lg:left-[-16px] lg:bottom-[-16px] lg:top-[unset] lg:right-[unset]  md:w-[160px] md:h-[160px] lg:rotate-30'>
				<Image
					src={'/img/benefits/HammerAndPick.webp'}
					alt=''
					sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
					fill
					className='object-cover'
				/>
			</div>
		</section>
	)
}

export default Benefits
