import { Menu } from '@headlessui/react'

import { Fragment, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

export interface DropdownItem {
	disabled?: boolean
	content?: ReactNode
	onClick?: () => void
	href?: string
}

interface DropdownProps {
	className?: string
	items: DropdownItem[]
	trigger: ReactNode
	direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.optionsBottomLeft,
	'bottom right': cls.optionsBottomRight,
	'top right': cls.optionsTopRight,
	'top left': cls.optionsTopLeft,
}

export function Dropdown(props: DropdownProps) {
	const { className, trigger, items, direction = 'bottom right' } = props

	const menuClasses = [mapDirectionClass[direction]]

	return (
		<Menu as='div' className={classNames(cls.Dropdown, {}, [className])}>
			<Menu.Button className={cls.btn}>{trigger}</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
				{items.map(({ disabled, onClick, content, href }) => {
					const contentElement = ({ active }: { active: boolean }) => (
						<button
							type='button'
							disabled={disabled}
							onClick={onClick}
							className={classNames(cls.item, { [cls.active]: active }, [])}
						>
							{content}
						</button>
					)

					if (href) {
						return (
							<Menu.Item as={AppLink} to={href} disabled={disabled} key={href}>
								{contentElement}
							</Menu.Item>
						)
					}

					return (
						<Menu.Item as={Fragment} disabled={disabled} key={href}>
							{contentElement}
						</Menu.Item>
					)
				})}
			</Menu.Items>
		</Menu>
	)
}
