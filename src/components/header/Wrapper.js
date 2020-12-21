import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Wrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 2rem;
	z-index: 20;

	${media.small} {
		height: 56px;
		padding: 0 1rem;
	}

	& > div {
		display: flex;
		align-items: flex-end;
	}
`;

export default Wrapper