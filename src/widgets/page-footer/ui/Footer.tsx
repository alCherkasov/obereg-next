import { Heading } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='max-w-7xl w-full mx-auto px-5 pb-md lg:px-[3.125rem] bg-dark rounded-sm'>
			<div className='grid grid-cols-2 grid-rows-2 pt-sm pb-md gap-md md:grid-cols-4 md:grid-rows-1 md:pt-md'>
				<nav className='flex flex-col gap-xs'>
					<Heading level='3' color='light'>
						Навигация
					</Heading>
					<ul className='flex flex-col gap-xs text-xs text-light md:text-md'>
						<li>
							<Link
								href={'#products'}
								className='transition-primary hover:text-primary'
							>
								Мы строим
							</Link>
						</li>
						<li>
							<Link
								href={'#benefits'}
								className='transition-primary hover:text-primary'
							>
								Преимущества
							</Link>
						</li>
						<li>
							<Link
								href={'#processes'}
								className='transition-primary hover:text-primary'
							>
								Этапы работы
							</Link>
						</li>
						<li>
							<Link
								href={'#photos'}
								className='transition-primary hover:text-primary'
							>
								Фотографии
							</Link>
						</li>
						<li>
							<Link
								href={'#contacts'}
								className='transition-primary hover:text-primary'
							>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
				<div className='flex flex-col gap-xs'>
					<Heading level='3' color='light'>
						О компании
					</Heading>
					<ul className='flex flex-col gap-xs text-xs text-light md:text-md'>
						<li>ИП: Иванов Иван Иванович </li>
						<li>ИНН: 537567458659789679 </li>
						<li>ОГРН: 437547586786789 </li>
					</ul>
				</div>
				<div className='flex flex-col gap-xs'>
					<Heading level='3' color='light'>
						Контакты
					</Heading>
					<ul className='flex flex-col gap-xs text-xs text-light md:text-md'>
						<li>
							<Link
								href='tel:+79182031229'
								className='text-balance underline transition-primary hover:text-primary'
							>
								Отдел продаж:
								<br />
								+7 (918) 203-12-29
							</Link>
						</li>
						<li>
							<Link
								href='tel:+79676447263'
								className='text-balance underline transition-primary hover:text-primary'
							>
								Аренда:
								<br />
								+7 (967) 644-72-63
							</Link>
						</li>
						<li>
							<Link
								href='mailto:example@test.com'
								className='text-balance underline transition-primary hover:text-primary'
							>
								E-mail:
								<br />
								example@test.com
							</Link>
						</li>
						<li>
							<div className='flex gap-sm'>
								<Link href={'/'} className='block relative w-10 h-10'>
									<Image
										src={'/icons/telegram-white.svg'}
										alt='Написать в Telegram'
										fill
									/>
								</Link>
								<Link href={'/'} className='block relative w-10 h-10'>
									<Image
										src={'/icons/whatsapp-white.svg'}
										alt='Написать в WhatsApp'
										fill
									/>
								</Link>
							</div>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-xs'>
					<Heading level='3' color='light'>
						Полезное
					</Heading>
					<ul className='flex flex-col gap-xs text-xs text-light md:text-md'>
						<li>
							<Link href={'/'} className='underline text-primary'>
								Политика конфиденциальности
							</Link>
						</li>
						<li>
							<Link href={'/'} className='underline text-primary'>
								Пользовательское соглашение
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<p className='text-light'>© «Оберег», 2025. Все права защищены</p>
			</div>
		</footer>
	)
}

export default Footer
