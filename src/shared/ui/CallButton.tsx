import Image from 'next/image'
import Link from 'next/link'

const CallButton = () => {
	return (
		<Link
			href={'tel:+79182031229'}
			className='fixed z-[99] right-sm bottom-xxl w-16 h-16 flex items-center justify-center bg-interact rounded-sm cursor-pointer transition-primary animate-subtle-glow hover:bg-interact-hover active:bg-interact-active shadow-default md:hidden'
		>
			<Image
				src={'icons/phone.svg'}
				alt='Позвонить нам'
				width={32}
				height={32}
			/>
		</Link>
	)
}

export default CallButton
