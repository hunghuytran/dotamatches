import React from 'react';
import styled from 'styled-components';
import { FaTrophy } from 'react-icons/fa';

const Container = styled.div`
	display: flex;
	color: #2c3e50;
	justify-content: space-around;
	font-size: 0.75em;
	width: 100%;

	vertical-align: center;
	border-bottom: 1px solid #2c3e50;
`
const IDStyle = styled.span`
	font-weight: bold;
	color: #2980b9;
`

const Wrapper = styled.div`
	width: 25%;
	text-align: center;
`

const Team = styled.p`
	color: ${props => props.radiant ? '#2ecc71' : '#e74c3c'}
	font-weight: bold;
`

const Match = ({ match_id, league_name, duration, radiant_name, dire_name, radiant_win }) => {
	var minutes = Math.floor(duration / 60); // 7
	var seconds = duration % 60; // 30
	var time = `${minutes}:${seconds}`
	return (
		<Container>
			<Wrapper><p><IDStyle>{match_id}</IDStyle><br/>{league_name}</p></Wrapper>
			<Wrapper><p><strong>{time} min</strong><br/>{radiant_win? 'Dire' : 'Radiant'}</p></Wrapper>
			<Wrapper><Team radiant>{radiant_win || <FaTrophy color='#f1c40f'/> } {radiant_name}</Team></Wrapper>
			<Wrapper><Team>{!radiant_win || <FaTrophy color='#f1c40f'/> }  {dire_name}</Team></Wrapper>
		</Container>
	)
}

export default Match;