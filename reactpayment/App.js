import './App.css';
import { useState } from 'react';
import StripeContainer from './Components/StripeContainer'

function App() {
  const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Repurpose payment gateway</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$0.01</h3>
					<button onClick={() => setShowItem(true)}>Purchase</button>
				</>
			)}
		</div>
	);
}

export default App;
