import React, { Component } from 'react';
import InformationBar from '../InformationBar';
import Match from '../Match';
import styled from 'styled-components';
import SearchField from '../SearchField';

const Subtitle = styled.h2`
	@import url('https://fonts.googleapis.com/css?family=Spicy+Rice');
	text-align: center;
	font-family: 'Spicy Rice', cursive;
	font-size: 30px;
	margin: 0px;
	color: #2c3e50;
`

const Title = styled.p`
	@import url('https://fonts.googleapis.com/css?family=Spicy+Rice');
	text-align: center;
	font-family: 'Spicy Rice', cursive;
	font-size: 15px;
	margin-bottom: 0;
	color: #7f8c8d;
`

const StyledPage = styled.div`
	margin-top: 15px;
	display: flex;
	justify-content: space-evenly;
`

const Button = styled.div`
	cursor: pointer;
	text-align: center;
	font-weight: bold;
	width: 30px;
	color: #2c3e50
	border: 2px solid #2c3e50;
	border-radius: 4px;
`

export default class MatchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			matches: [],
			current: 1,
      		matchesPerPage: 10,
      		searchfield: '',
      		pages: [],
      		sort: true,
      		sortActivated: false
		}
		this.load = this.load.bind(this);
		this.each = this.each.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.changeSort = this.changeSort.bind(this);
	}

	handleClick(event) {
		this.setState({
			current: Number(event.target.id)
		})
	}

	load() {
		fetch('https://api.opendota.com/api/proMatches')
		.then(response => response.json())
		.then(matches => this.setState({
			matches
		}))
	}

	each(match) {
		return (
			<div key={match.match_id}>
				<Match 
					match_id={match.match_id}
					league_name={match.league_name}
					duration={match.duration}
					radiant_name={match.radiant_name}
					dire_name={match.dire_name}
					radiant_win={match.radiant_win}
				/>
			</div>
		)
	}

	componentWillMount() {
		this.load();
	}

	renderPage(number) {
		return (
			<Button key={number}
				id={number}
				onClick={this.handleClick}
			>
			{number}
			</Button>
		)
	}

	changeSort(event) {
		this.setState(prevState => ({
      		sort: !prevState.sort,
      		sortActivated: true,
      		current: 1
    	}));
	}

	onSearchChange(event) {
		this.setState({ searchfield: event.target.value,
		current: 1 })
	}

	render() {
		console.log(this.state)
		var lastIndex = this.state.current * this.state.matchesPerPage;
		var firstIndex = lastIndex - this.state.matchesPerPage;
		var currentMatches = this.state.matches.slice(firstIndex, lastIndex);

		const filteredMatches = currentMatches.filter(match =>{
      		return match.league_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	})

		var sortFiltered = ''

    	if(this.state.sortActivated) {
    		if(this.state.sort) {
    			sortFiltered = this.state.matches
    			.filter(match =>{
      			return match.league_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    			})
    			.sort((a, b) => a.duration > b.duration)
    			.slice(firstIndex, lastIndex)
    		} else {
    			sortFiltered = this.state.matches
    			.filter(match =>{
      			return match.league_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    			})
    			.sort((a, b) => a.duration < b.duration)
    			.slice(firstIndex, lastIndex)
    		}
    	}

	    const pages= [];
	    for (let i = 1; i <= Math.ceil(this.state.matches.filter(match =>{
      		return match.league_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	}).length / this.state.matchesPerPage); i++) {
	    	pages.push(i);
	    }

		return (
			<div>
				<Title>DOTA</Title>
				<Subtitle>Matches Overview</Subtitle>
				<SearchField onSearchChange={this.onSearchChange} />
				<InformationBar changeSort={this.changeSort} />
				{!this.state.sortActivated ? filteredMatches.map(this.each) : sortFiltered.map(this.each)}
				<StyledPage>
				{pages.map(number => this.renderPage(number))}
				</StyledPage>
			</div>
		)
	}
}