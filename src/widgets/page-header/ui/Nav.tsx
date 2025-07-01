import Link from 'next/link'
import { INavLink } from '../model/types'

interface NavProps {
	links: INavLink[]
	isOpen: boolean
	closeNav: () => void
}

const Nav = ({ links, isOpen, closeNav }: NavProps) => {
	return (
		<nav
			className={`fixed top-[0] right-[0] w-full min-h-dvh py-lg bg-dark transition-primary md:max-w-80 lg:w-auto lg:static lg:max-w-none lg:min-h-fit lg:py-0 lg:bg-transparent lg:translate-x-0 ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<ul className='w-full font-inter text-center text-nowrap lg:flex lg:gap-xs lg:w-fit'>
				{links.map(link => (
					<li
						key={link.name}
						className='flex items-center w-full py-xxs transition-primary cursor-pointer hover:bg-dark-hover active:bg-dark-hover lg:hover:bg-light-gray lg:px-xxs lg:rounded'
					>
						<Link
							onClick={closeNav}
							href={link.path}
							className='inline-block w-full text-lg text-light md:text-md lg:text-dark lg:text-sm'
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
