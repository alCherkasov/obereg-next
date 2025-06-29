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
				<div className='flex justify-between'>
					<Link href='/' className='relative w-[160px] h-[37px]'>
						<Logo />
					</Link>
					<Nav
						isOpen={navIsOpen}
						closeNav={() => setNavIsOpen(false)}
						links={navConfig}
					/>
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
