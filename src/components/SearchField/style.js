import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 25px;
`
export const Input = styled.input`
	padding: 10px 25px;
	border: 2px solid #2c3e50;
	border-radius: 5px;
	color: #2c3e50;
	font-weight: bold;

	&:focus {
    outline:none;
	}
`