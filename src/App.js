import React from 'react'
import './App.css'

import Buttons from './components2/atoms/Buttons'
import InputBar from './components2/organisms/InputBar'
import DropdownBar from './components2/organisms/DropdownBar'
import Textfield from './components2/organisms/Textfield'
import SearchBar from './components2/organisms/SearchBar'
import TabsBar from './components2/organisms/TabsBar'
import StepsBar from './components2/organisms/StepsBar'
import StageBar from './components2/organisms/StageBar'
import JobCategory from './components2/organisms/JobCategory'
import JobList from './components2/organisms/JobList'
import Company from './components2/organisms/Company'
import LandingPage from './components2/page/Navbar/LandingPage'
import Homepage from './components2/page/Navbar/Homepage'
import Layout from 'antd/es/layout/layout'
import LayoutPage from './components2/page/Navbar/LayoutPage'
import ContohSaja from './components2/page/Navbar/ContohSaja'
import Example from './contohResponsive/Responsive'
import FindJobs from './components2/page/Navbar/FindJobs'


export default function App() {
	return (
		<div className='container' >
			{/* <LandingPage /> */}
			<FindJobs />


			{/* <Example /> */}
			{/* <ContohSaja /> */}
			{/* <Homepage /> */}
			{/* <LayoutPage /> */}
			{/* <Company /> */}
			{/* <JobList /> */}
			{/* <JobCategory /> */}
			{/* <StageBar /> */}
			{/* <StepsBar /> */}
			{/* <TabsBar /> */}
			{/* <SearchBar /> */}
			{/* <Buttons /> */}
			{/* <InputBar /> */}
			{/* <DropdownBar /> */}
			{/* <Textfield /> */}
		</div>
	)
}
