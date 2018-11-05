import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 25px;
`
const Input = styled.input`
	padding: 10px 25px;
	border: 2px solid #2c3e50;
	border-radius: 5px;
	color: #2c3e50;
	font-weight: bold;

	&:focus {
    outline:none;
	}
`

const SearchField = ({onSearchChange}) => {
	return (<Container><Input type="text" placeholder="Search league..." onChange={onSearchChange}/></Container>)
}

export default SearchField;