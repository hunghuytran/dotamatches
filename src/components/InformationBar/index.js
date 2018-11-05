import React from 'react';
import styled from 'styled-components';
import { FaSort } from 'react-icons/fa'

const Container = styled.div`
	display: flex;
	color: white;
	justify-content: space-around;
	height: 40px;
	background-color: #2c3e50;
	font-size: 0.75em;
	font-weight: bold;
	width: 100%;
	flex-basis: 25%;
`

const Wrapper = styled.div`
	width: 25%;
	text-align: center;
`

const TeamStyled = styled.p`
	color: ${props => props.radiant ? '#2ecc71' : '#e74c3c'}
`

const InformationBar = ({changeSort}) => {
	return (
		<Container>
			<Wrapper><p>ID</p></Wrapper>
			<Wrapper><p>DURATION <FaSort size='10' onClick={changeSort} /></p></Wrapper>
			<Wrapper><TeamStyled radiant>RADIANT</TeamStyled></Wrapper>
			<Wrapper><TeamStyled>DIRE</TeamStyled></Wrapper>
		</Container>
	)
}

export default InformationBar;