import GlobalStyle from './styles/global';

import Calculator from './components/Calculator';

import { Screen } from './AppStyle.js';

function App() {
	return (
		<Screen>
			<GlobalStyle/>
			<Calculator/>
		</Screen>
	);
}

export default App;
