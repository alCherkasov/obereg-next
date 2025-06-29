interface BurgerButtonProps {
	alt: string
	isOpen: boolean
	toggleOpen: () => void
}

const BurgerButton = ({
	alt,
	isOpen = false,
	toggleOpen,
}: BurgerButtonProps) => {
	return (
		<button
			className='w-8 h-8 flex flex-col gap-1 items-center justify-center cursor-pointer lg:hidden'
			onClick={toggleOpen}
		>
			<span className='visually-hidden'>{alt}</span>
			<span
				className={`relative block w-6 h-0.5 bg-dark rounded transition-primary ${
					isOpen ? '-rotate-45 translate-y-[6px] bg-light' : 'rotate-0'
				}`}
			/>
			<span
				className={`relative block w-6 h-0.5 bg-dark rounded transition-primary ${
					isOpen ? 'opacity-0' : 'opacity-100'
				}`}
			/>
			<span
				className={`relative block w-6 h-0.5 bg-dark rounded transition-primary ${
					isOpen ? 'rotate-45 -translate-y-[6px] bg-light' : 'rotate-0'
				}`}
			/>
		</button>
	)
}

export default BurgerButton
