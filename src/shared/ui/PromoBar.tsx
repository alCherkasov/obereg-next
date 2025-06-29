import { FC } from 'react'
import Button from './Button'
import Heading from './Heading'

interface PromoBarProps {
	hidden: boolean
}

const PromoBar: FC<PromoBarProps> = ({ hidden }) => {
	return (
		<div
			className={`fixed z-[1000] left-0 bottom-0 p-xs w-full bg-secondary ${
				hidden ? 'hidden' : ''
			}`}
		>
			<div className='max-w-7xl w-full mx-auto px-5 lg:px-[3.125rem] flex justify-between'>
				<div className=''>
					<Heading level='3'>Поможем определиться с выбором</Heading>
					<p>
						Мы сделаем индивидуальную подборку квартир, подходящих под ваши
						предпочтения
					</p>
				</div>
				<Button alt=''>Подобрать дом</Button>
			</div>
		</div>
	)
}

export default PromoBar
