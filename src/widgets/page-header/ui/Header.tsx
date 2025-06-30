'use client'

import { Logo } from '@/shared/ui'
import Link from 'next/link'
import { useState } from 'react'
import { useHeaderShadow } from '../hooks/useHeaderShadow'
import { navConfig } from '../model/navConfig'
import BurgerButton from './BurgerButton'
import Nav from './Nav'

const Header = () => {
	const [navIsOpen, setNavIsOpen] = useState<boolean>(false)
	useHeaderShadow('page-header')
	return (
		<header className='fixed z-[100] w-full'>
			<div
				id='page-header'
				className='max-w-7xl w-full mx-auto px-5 py-xs rounded-sm lg:px-[3.125rem] bg-light'
			>
				<div className='flex justify-between items-center'>
					<Link href='/' className='relative w-[160px] h-[37px]'>
						<Logo />
					</Link>
					<Nav
						isOpen={navIsOpen}
						closeNav={() => setNavIsOpen(false)}
						links={navConfig}
					/>
					<div className='hidden xs:flex flex-col items-end font-inter font-semibold text-sm xs:ml-auto xs:mr-10 lg:ml-0 lg:mr-0'>
						<Link href={'tel:+79182031229'}>+7 (918) 203-12-29</Link>
						<Link href={'tel:+79676447263'}>+7 (967) 644-72-63</Link>
					</div>
					<BurgerButton
						alt='Открыть меню'
						isOpen={navIsOpen}
						toggleOpen={() => setNavIsOpen(prev => !prev)}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
