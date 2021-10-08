import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import './navbar.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container'>
				<div className='left'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0hrakNGjQmiidEbVVtkhl_f12r_bSxtoO9-VAP8enZqyHeU4wgxAgjE5fhql75qJlhk&usqp=CAU'
						alt='logo1'
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className='right'>
					<Search />
					<span>KID </span>
					<Notifications />
					<img
						src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt=''
					/>
					<ArrowDropDown />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
