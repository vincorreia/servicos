import { Navbar } from 'components/molecules/Navbar'

type PageLayoutProps = { children: React.ReactNode }
export const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<div className='flex flex-col h-screen'>
			<Navbar />
			{children}
		</div>
	)
}
