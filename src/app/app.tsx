import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from "@app/router/router"
import "@styles/default.scss"
import MobileLimiter from '@/components/mobile/mobile-limiter'

createRoot(document.getElementById('root')!).render(
	<MobileLimiter>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</MobileLimiter>
)
