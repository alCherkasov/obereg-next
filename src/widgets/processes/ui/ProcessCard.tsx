import { Button, Heading } from '@/shared/ui'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { IProcess } from '../model/types'

export const ProcessCard: FC<IProcess> = ({
	title,
	text,
	imageUrl,
	id,
	hasButton,
	cardColor,
}) => {
	const base =
		'relative overflow-hidden xl:aspect-[4/3] xl:max-w-[380px] xl:max-h-[280px] flex flex-col gap-sm px-xs pt-xs pb-sm md:px-sm md:pt-sm md:pb-md bg-${cardColor} rounded-sm'

	const cardClass = clsx(base, cardColor)
	return (
		<div className={cardClass}>
			<div className='flex flex-col gap-xs'>
				<div className='flex justify-between'>
					<Heading level='3'>{title}</Heading>
					<p className='font-inter font-semibold'>0{id}</p>
				</div>
				<div className='text-balance'>
					<p className='text-sm sm:text-base'>{text}</p>
				</div>
			</div>
			{hasButton && <Button alt={'Написать нам'}>Написать нам</Button>}
			{imageUrl && (
				<div className='absolute w-20 h-20 right-[0px] bottom-[0px] rotate-[-30deg] lg:w-25 lg:h-25 lg:right-[-8px] lg:bottom-[-8px]'>
					<Image
						src={imageUrl}
						alt=''
						fill
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
					/>
				</div>
			)}
		</div>
	)
}
