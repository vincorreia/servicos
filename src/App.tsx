import { PageLayout } from 'components/molecules/Layout'
import { Routes, Route } from 'react-router-dom'
import { Router } from 'router'
function App() {
	return (
		<div className='App'>
			<PageLayout>
				<Routes>
					<Route path={Router.Home} element={<div></div>} />
				</Routes>
			</PageLayout>
		</div>
	)
}

export default App
