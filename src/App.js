import React from 'react'
import './App.css'

import LandingPage from './components2/page/Navbar/LandingPage'
import FindJobs from './components2/page/Navbar/FindJobs'
import Example from './contohResponsive/Responsive'

// Organism folder
import Company from './components2/organisms/Company'
import DropdownBar from './components2/organisms/DropdownBar'
import InputBar from './components2/organisms/InputBar'
import JobCategory from './components2/organisms/JobCategory'
import JobList from './components2/organisms/JobList'
import SearchBar from './components2/organisms/SearchBar'
import StageBar from './components2/organisms/StageBar'
import StepsBar from './components2/organisms/StepsBar'
import TabsBar from './components2/organisms/TabsBar'
import Textfield from './components2/organisms/Textfield'

// Atoms folder
import Buttons from './components2/atoms/Buttons'

import Homepage from './components2/page/Navbar/Homepage'
import LayoutPage from './components2/page/Navbar/LayoutPage'
import ContohSaja from './components2/page/Navbar/ContohSaja'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
	return (
		<div className='container' >
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/companies' element={<FindJobs />} />
			</Routes>

			{/* <LandingPage /> */}
			{/* <FindJobs /> */}

			{/* Penggunaan useMediaQuery */}
			{/* <Example /> */}
		</div>
	)
}
