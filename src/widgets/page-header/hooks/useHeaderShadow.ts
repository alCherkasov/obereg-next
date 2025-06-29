import { useEffect } from 'react'

export const useHeaderShadow = (id: string) => {
	useEffect(() => {
		const checkPageOffset = () => {
			const pageOffset = window.pageYOffset
			const header = document.getElementById(id)
			if (!header) return

			if (pageOffset > 100) {
				header.classList.add('header-border-bottom!')
			} else {
				header.classList.remove('header-border-bottom!')
			}
		}
		window.addEventListener('scroll', checkPageOffset)
		checkPageOffset()
		return () => window.removeEventListener('scroll', checkPageOffset)
	}, [id])
}
