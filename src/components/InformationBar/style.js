import styled from 'styled-components';

export const Container = styled.div`
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

export const Wrapper = styled.div`
	width: 25%;
	text-align: center;
`

export const TeamStyled = styled.p`
	color: ${props => props.radiant ? '#2ecc71' : '#e74c3c'}
`