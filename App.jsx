import { DisplayProvider } from './src/contexts/DisplayContext';
import MainPage from './src/screens/main';

export default function App() {
	return (
		<DisplayProvider>
			<MainPage />
		</DisplayProvider>
	);
}