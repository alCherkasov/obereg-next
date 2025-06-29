import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, type ForwardedRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'password' | 'number' | 'date' | 'search'
	placeholder?: string
	errorMessage?: string | undefined
}

const Input = forwardRef(function Input(
	{ placeholder, errorMessage, type = 'text', ...props }: InputProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	const base =
		'w-full px-2 py-1.5 text-base text-text outline-none rounded-sm border-1  transition-all duration-200 ease-in-out hover:border-focus focus-visible:border-focus focus-visible:shadow-focus placeholder:text-gray hover:shadow-focus'
	const error = 'border-error shadow-error'

	const inputClass = clsx(base, {
		['border-gray']: !errorMessage,
		[error]: errorMessage,
	})

	return (
		<div className='relative w-full'>
			<input
				type={type}
				ref={ref}
				placeholder={placeholder}
				className={inputClass}
				{...props}
			/>
			{errorMessage && (
				<p className='absolute -bottom-4 right-0 text-sm text-error'>
					{errorMessage}
				</p>
			)}
		</div>
	)
})

export default Input
