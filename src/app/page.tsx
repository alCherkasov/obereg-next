import { PromoBar } from '@/shared/ui'
import Benefits from '@/widgets/benefits/ui/Benefits'
import Contacts from '@/widgets/contacts/ui/Contacts'
import Gallery from '@/widgets/gallery/ui/Gallery'
import Hero from '@/widgets/hero/ui/Hero'
import Processes from '@/widgets/processes/ui/Processes'
import Products from '@/widgets/products/ui/Products'

export default function Home() {
	return (
		<main className='max-w-7xl w-full mx-auto px-5 lg:px-[3.125rem] flex flex-col gap-lg py-xl sm:gap-xl'>
			<Hero />
			<Products />
			<Benefits />
			<Processes />
			<Gallery />
			<Contacts />
			<PromoBar hidden={true} />
		</main>
	)
}
