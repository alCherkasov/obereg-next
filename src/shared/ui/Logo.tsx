import Image from 'next/image'

const Logo = () => {
	return (
		<Image
			src={'/logos/logo.svg'}
			alt='Логотип'
			sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
			fill
			priority
		/>
	)
}

export default Logo
