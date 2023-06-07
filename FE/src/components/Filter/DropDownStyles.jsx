import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const Nav = styled.nav`
background: white;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1200px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled.div`
color: white;
display: flex;
align-items: center;
text-decoration: black;
padding: 0 1rem;
height: 100%;
cursor: pointer;
color : blue;
&.active {
	color: black;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 1080px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 1080px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
color : red;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled.button`
border-radius: 4px;
background: #000;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #becff7;
	color: #fff;
}
`;
