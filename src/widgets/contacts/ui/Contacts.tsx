import { Heading } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

const Contacts = () => {
	return (
		<section id='contacts'>
			<div className='flex flex-col gap-md sm:grid sm:grid-cols-2'>
				<div className='flex flex-col gap-sm'>
					<Heading level='2'>Свяжитесь с&nbsp;нами</Heading>
					<p className='max-w-[380px] lg:text-lg'>
						С нетерпением ждём вашего звонка или сообщения
					</p>
				</div>
				<div className='flex flex-col px-xs pt-xs pb-sm md:px-sm md:pt-sm md:pb-md rounded-sm bg-light-gray'>
					<div className='grid grid-cols-2 pb-sm border-b-2 border-disabled'>
						<Heading level='3'>Телефон:</Heading>
						<div className='flex flex-col gap-xs'>
							<p className='text-sm lg:text-lg'>
								<span className='font-inter font-semibold'>Отдел продаж:</span>
								<br />
								<Link href={'tel:+79182031229'} className='underline'>
									+7 (918) 203-12-29
								</Link>
							</p>
							<p className='text-sm lg:text-lg'>
								<span className='font-inter font-semibold'>
									Аренда для отдыха:
								</span>
								<br />
								<Link href={'tel:+79676447263'} className='underline'>
									+7 (967) 644-72-63
								</Link>
							</p>
						</div>
					</div>
					<div className='grid grid-cols-2 py-sm border-b-2 border-disabled'>
						<Heading level='3'>Мессенджеры:</Heading>
						<div className='flex gap-sm'>
							<Link href={'/'} className='block relative w-10 h-10'>
								<Image
									src={'/icons/telegram.svg'}
									alt='Написать в Telegram'
									fill
								/>
							</Link>
							<Link href={'/'} className='block relative w-10 h-10'>
								<Image
									src={'/icons/whatsapp.svg'}
									alt='Написать в WhatsApp'
									fill
								/>
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-2 py-sm border-b-2 border-disabled'>
						<Heading level='3'>E-mail:</Heading>
						<Link
							href={'mailto:example@test.com'}
							className='underline text-sm lg:text-lg'
						>
							example@test.com
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts
