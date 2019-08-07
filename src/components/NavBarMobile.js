import { useState, useEffect } from 'react';

import Menu from '../../static/icons/menu.png';
import Logo from '../../static/logos/jn.png';

const NavBarMobile = (props) => {
	const [isNavOpen, setNavOpen] = useState(false);
	const [slide, setSlide] = useState('slide-out')

	const handleSlide = () => {
		if (slide == "slide-in") {
		  setSlide("slide-out");
		} else {
			setSlide("slide-in");
		};
	};

	const	toggleNavOpen = () => {

		setNavOpen(true);

		handleSlide();

	};

	const handleNavBar = () => {
		if (isNavOpen) {
			return (
				<div className={`nav-mobile-container ${slide}`}>
					<div className="nav-mobile-item">
						<span>work</span>
					</div>
					<div className="nav-mobile-item">
						<span>about me</span>
					</div>
				</div>
			);
		};
	};

	return (
		<div className="navbar-mobile">
			<div className="mobile-header">
				<img className="nav-mobile-logo" alt="jn-logo" src={Logo} />
				<img className="nav-mobile-menu" alt="menu" src={Menu} onClick={toggleNavOpen} />
			</div>
			<div>
				{handleNavBar()}
			</div>
		</div>
	);
};

export default NavBarMobile;
