export interface IProcess {
	id: number
	title: string
	text: string
	imageUrl?: string
	hasButton: boolean
	cardColor: 'bg-light-gray' | 'bg-primary-light' | 'bg-secondary-light'
}