import React from 'react'
import { Helmet } from 'react-helmet-async'
// containers
import Name from 'containers/profile/Name'
import Hexagonal from 'containers/making/Hexagonal'
import HexagonalText from 'containers/making/HexagonalText'
// components
import Title from 'components/making/Title'

const MakingPage = () => {
	return (<>
		<Helmet>
			<title>NB#log - Making</title>
		</Helmet>

		<Name />
		<Hexagonal />
		<Title message="FBWE - For Better Web Experience." />
		<HexagonalText />
	</>);
}

export default MakingPage