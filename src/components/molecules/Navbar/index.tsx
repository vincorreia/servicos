import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Router } from 'router'

export const Navbar = () => {
	const { t } = useTranslation()
	return (
		<nav className='flex justify-between h-14 px-8 items-center bg-slate-800 text-white'>
			<span>A BRAND</span>
			<div>
				<ul className='flex gap-x-2'>
					<li>
						<Link to={Router.Home}>{t('common.home')}</Link>
					</li>
					<li>
						<Link to={Router.About}>{t('common.about')}</Link>
					</li>
					<li>
						<Link to={Router.Contact}>{t('common.contact')}</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
