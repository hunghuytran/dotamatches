import React, { Component } from 'react';
import InformationBar from '../InformationBar';
import Match from '../Match';
import SearchField from '../SearchField';
import {Title, Subtitle, StyledPage, Button} from './style.js'

export default class MatchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			matches: [],
			current: 1,
      		matchesPerPage: 10,
      		searchfield: '',
      		pages: [],
      		ascending: true,
      		activateSort: false
		}
		this.load = this.load.bind(this);
		this.each = this.each.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.changeSort = this.changeSort.bind(this);
		this.createPages = this.createPages.bind(this);
		this.createFilteredMatches = this.createFilteredMatches.bind(this);
		this.filtered = this.filtered.bind(this);
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
      		ascending: !prevState.ascending,
      		activateSort: true,
      		current: 1
    	}));
	}

	onSearchChange(event) {
		this.setState({ searchfield: event.target.value,
		current: 1 })
	}

	filtered() {
		return this.state.matches.filter(match =>{
      		return match.league_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	})
	}

	createPages() {
	    const pages= [];
	    for (let i = 1; i <= Math.ceil(this.filtered().length / this.state.matchesPerPage); i++) {
	    	pages.push(i);
	    }
	    return pages
	}

	createFilteredMatches() {
		var lastIndex = this.state.current * this.state.matchesPerPage;
		var firstIndex = lastIndex - this.state.matchesPerPage;

		var filteredMatches = ''

		if(this.state.activateSort) {
			filteredMatches = this.state.ascending ? 
			this.filtered().sort((a, b) => a.duration > b.duration) :
			this.filtered().sort((a, b) => a.duration < b.duration)
		} else {
			filteredMatches = this.filtered();	
		}

		return filteredMatches.splice(firstIndex, lastIndex)
	}

	render() {
		var currentMatches = this.createFilteredMatches();

	    const pages= this.createPages();

		return (
			<div>
				<Title>DOTA</Title>
				<Subtitle>Matches Overview</Subtitle>
				<SearchField onSearchChange={this.onSearchChange} />
				<InformationBar changeSort={this.changeSort} />
				{currentMatches.map(this.each)}
				<StyledPage>
				{pages.map(number => this.renderPage(number))}
				</StyledPage>
			</div>
		)
	}
}