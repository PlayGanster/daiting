import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from "@app/router/router"
import "@styles/default.scss"
import MobileLimiter from '@/components/mobile/mobile-limiter'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<MobileLimiter>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</MobileLimiter>
	</Provider>
)
