import React from 'react';
import { FaSort } from 'react-icons/fa'
import { Container, Wrapper, TeamStyled } from './style.js';

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