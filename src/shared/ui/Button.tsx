import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	alt: string
}

const Button: FC<ButtonProps> = ({ alt, children }) => {
	return (
		<button className='self-start py-5 px-10 text-base text-white rounded-sm bg-dark transition-primary hover:bg-dark-hover cursor-pointer active:bg-black focus-visible:bg-black'>
			<span className='visually-hidden'>{alt}</span>
			{children}
		</button>
	)
}

export default Button
