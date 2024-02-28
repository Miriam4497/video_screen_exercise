import styled from "styled-components";

export const JudgeListStyle = styled.div`
 height:60%;
 display: flex;
 flex-direction: row;
 overflow-x:auto;
 @media screen and (max-width: 1024px) {
    justify-content: ${(props) => (props.length < 5 ? 'center' : 'space-between')}
 }
 @media screen and (min-width: 1024px){
    justify-content: ${(props) => (props.length < 3 ? 'center' : 'space-between')}
 }
`;
export const SpeakerListStyle = styled.div`
 height:30%;
 display: flex;
 flex-direction: row;
 overflow-x:auto;
 @media screen and (max-width: 1024px) {
    justify-content: ${(props) => (props.length < 5 ? 'center' : 'space-between')}
 }
 @media screen and (min-width: 1024px){
    justify-content: ${(props) => (props.length < 5 ? 'center' : 'space-between')}
 }
`;
