import { IProcess } from '../model/types'

export const processesConfig: IProcess[] = [
	{
		id: 1,
		title: 'Заявка и консультация',
		text: 'Вы оставляете заявку — мы связываемся, уточняем ваши задачи и подбираем подходящее решение',
		hasButton: true,
		cardColor: 'bg-light-gray'
	},
	{
		id: 2,
		title: 'Проект и согласование',
		text: 'Создаём планировку, подбираем комплектацию и материалы. Учитываем все пожелания и бюджет',
		hasButton: false,
		imageUrl: '/img/process/Triangular-ruler.webp',
		cardColor: 'bg-secondary-light'
	},
	{
		id: 3,
		title: 'Строительство на участке',
		text: 'Возводим дом на вашем участке: собираем каркас, утепляем, выполняем внешнюю и внутреннюю отделку',
		hasButton: false,
		imageUrl: '/img/process/Building-construction.webp',
		cardColor: 'bg-primary-light'
	},
	{
		id: 4,
		title: 'Сдача объекта и передача ключей',
		text: 'Проверяем результат, передаём дом и все документы. Вы заезжаете или запускаете бизнес — всё готово!',
		hasButton: false,
		imageUrl: '/img/process/House-with-garden.webp',
		cardColor: 'bg-light-gray'
	},
]