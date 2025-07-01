import Image from 'next/image'

const ArrowButton = () => {
	return (
		<button className='w-[50px] h-[50px] flex items-center justify-center bg-light rounded-xs'>
			<div className='relative w-[30px] h-[30px]'>
				<Image src='/icons/arrow-button.svg' alt='' fill />
			</div>
		</button>
	)
}

export default ArrowButton
