import React from 'react'
import Link from 'next/link'

import NavBar from '../src/components/NavBar';
import Hero from '../src/Hero';

import '../sass/index.scss';

const Home = () => (
	<div>
		<NavBar />
		<Hero />
	</div>
)

export default Home;
