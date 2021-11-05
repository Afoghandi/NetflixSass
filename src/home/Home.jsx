import Feature from '../components/feature/Feature';
import Navbar from '../components/navbar/Navbar';
import List from '../components/list/List';
import './home.scss';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />

			<Feature />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
			<List />
		</div>
	);
};

export default Home;
