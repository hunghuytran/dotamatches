import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { Container, IDStyle, Wrapper, Team} from './style.js';

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