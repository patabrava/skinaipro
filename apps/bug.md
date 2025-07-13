 > next dev
web:dev:
web:dev:    ▲ Next.js 15.3.5
web:dev:    - Local:        http://localhost:3000
web:dev:    - Network:      http://192.168.178.122:3000
web:dev:    - Environments: .env.local
web:dev:
web:dev:  ✓ Starting...
web:dev:  ✓ Ready in 3.6s
web:dev:  ○ Compiling /_not-found ...
web:dev:  ✓ Compiled /_not-found in 2.5s (893 modules)
web:dev:  ○ Compiling / ...
web:dev:  ⨯ ./pages/_app.tsx:2:1
web:dev: Module not found: Can't resolve '../src/app/globals.css'
web:dev:   1 | import type { AppProps } from 'next/app';
web:dev: > 2 | import '../src/app/globals.css';
web:dev:     | ^
web:dev:   3 | import Nav from '../components/Nav';
web:dev:   4 |
web:dev:   5 | export default function App({ Component, pageProps }: AppProps) {
web:dev:
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev:  ⨯ ./pages/_app.tsx:2:1
web:dev: Module not found: Can't resolve '../src/app/globals.css'
web:dev:   1 | import type { AppProps } from 'next/app';
web:dev: > 2 | import '../src/app/globals.css';
web:dev:     | ^
web:dev:   3 | import Nav from '../components/Nav';
web:dev:   4 |
web:dev:   5 | export default function App({ Component, pageProps }: AppProps) {
web:dev:
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev:  GET / 500 in 3958ms