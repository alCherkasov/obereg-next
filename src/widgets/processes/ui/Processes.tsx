import { Heading } from '@/shared/ui'
import { processesConfig } from '../config/processesConfig'
import { ProcessCard } from './ProcessCard'

const Processes = () => {
	return (
		<section id='processes' className='flex flex-col gap-md lg:flex-row'>
			<div className='flex flex-col xl:min-w-[280px] xl:max-w-[380px]'>
				<Heading level='2'>Как мы работаем?</Heading>
				<p className='text-balance lg:text-lg'>
					Ваш новый дом всего за 4&nbsp;шага — мы берём всё на себя
				</p>
			</div>
			<div className='grid grid-cols-1 grid-rows-4 gap-sm sm:grid-cols-2 sm:grid-rows-2'>
				{processesConfig.map(process => (
					<ProcessCard
						key={process.id}
						title={process.title}
						text={process.text}
						imageUrl={process.imageUrl}
						hasButton={process.hasButton}
						cardColor={process.cardColor}
						id={process.id}
					/>
				))}
			</div>
		</section>
	)
}

export default Processes
