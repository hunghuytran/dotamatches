import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	color: #2c3e50;
	justify-content: space-around;
	font-size: 0.75em;
	width: 100%;

	vertical-align: center;
	border-bottom: 1px solid #2c3e50;
`
export const IDStyle = styled.span`
	font-weight: bold;
	color: #2980b9;
`

export const Wrapper = styled.div`
	width: 25%;
	text-align: center;
`

export const Team = styled.p`
	color: ${props => props.radiant ? '#2ecc71' : '#e74c3c'}
	font-weight: bold;
`