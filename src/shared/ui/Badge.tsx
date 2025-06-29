import Image from 'next/image'

const Badge = () => {
	return (
		<div className='flex items-center gap-xxs py-xs px-sm rounded-full bg-primary '>
			<div className='relative w-xs h-sm'>
				<Image src={'/icons/lightning.svg'} alt='' sizes='100vw' fill />
			</div>
			<p className='font-inter font-semibold'>Хит продаж</p>
		</div>
	)
}

export default Badge
