import clsx from 'clsx'
import { FC, HTMLAttributes, JSX } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level: '1' | '2' | '3'
	color?: 'dark' | 'light'
}

const variants = {
	1: 'text-xl sm:text-lg md:text-xl lg:text-xxl xl:leading-[1.3]',
	2: 'text-xl ',
	3: 'text-md lg:text-lg',
}

const Heading: FC<HeadingProps> = ({ level, children, color = 'dark' }) => {
	const headingClass = clsx(
		variants[level],
		`text-${color}`,
		'font-inter font-semibold text-balance'
	)
	const Tag = `h${level}` as keyof JSX.IntrinsicElements

	return <Tag className={headingClass}>{children}</Tag>
}

export default Heading
