import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './feature.scss';

export default function Feature({ type }) {
	return (
		<div className='featured'>
			{type && (
				<div className='category'>
					<span>{type === 'movie' ? 'Movies' : 'Series'} </span>
					<select name='genre' id='genre'>
						<option>Genre</option>
						<option value='comedy'>comedy</option>
						<option value='comedy'>documentary</option>
						<option value='adventure'>adventure</option>
						<option value='crime'>crime</option>
						<option value='fantasy'>fantasy</option>
						<option>history</option>
						<option>horror</option>
						<option>romance</option>
						<option>sci-fi</option>
						<option>thriller</option>
					</select>
				</div>
			)}
			<img
				src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
				alt=''
			/>
			<div className='info'>
				<img
					src='https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1'
					alt=''
				/>
				<span className='desc'>
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero
					qui sint necessitatibus totam. Ea sed facere neque itaque delectus
					consequuntur vitae officiis et reprehenderit. Optio ratione
					consectetur sint esse?{' '}
				</span>

				<div className='buttons'>
					<button className='play'>
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className='more'>
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
}
