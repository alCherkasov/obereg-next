import { Button, Heading } from '@/shared/ui'
import Input from '@/shared/ui/Input'

const RequestForm = () => {
	return (
		<form className='flex flex-col gap-md p-sm rounded-sm max-w-[380px] bg-light shadow-default'>
			<Heading level='2'>Оставьте заявку</Heading>
			<div className='flex flex-col gap-xs'>
				<Input placeholder='Имя' />
				<Input placeholder='Ваш номер телефона' />
			</div>
			<Button alt='Отправить заявку'>Отправить заявку</Button>
		</form>
	)
}

export default RequestForm
