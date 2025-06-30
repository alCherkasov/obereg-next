import Image from 'next/image'

const HappyClients = () => {
	return (
		<div className='flex justify-between items-center'>
			<div className='relative flex'>
				<div className='relative w-[40px] h-[40px] md:w-[50px] md:h-[50px]'>
					<Image
						src={'/img/happy-clients/client-1.png'}
						alt=''
						fill
						sizes='(max-width: 480px) 40px, 50px'
					/>
				</div>
				<div className='relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] -translate-x-3'>
					<Image
						src={'/img/happy-clients/client-2.png'}
						alt=''
						fill
						sizes='(max-width: 480px) 40px, 50px'
					/>
				</div>
				<div className='relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] -translate-x-6'>
					<Image
						src={'/img/happy-clients/client-3.png'}
						alt=''
						fill
						sizes='(max-width: 480px) 40px, 50px'
					/>
				</div>
			</div>
			<p className='text-sm -translate-x-3'>
				<span className='text-md'>100+</span>довольных
				<br />
				клиентов
			</p>
		</div>
	)
}

export default HappyClients
