import React from 'react';
import { Container, Input } from './style';

const SearchField = ({onSearchChange}) => {
	return (<Container><Input type="text" placeholder="Search league..." onChange={onSearchChange}/></Container>)
}

export default SearchField;