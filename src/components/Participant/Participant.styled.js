import styled from "styled-components";

export const ParticipantWrapper = styled.div`
 background-image:url(${(props) => (props.url)});
 border:1px solid black;
 margin:0.5%;
 min-width: ${(props) => (props.type === 1 ? '450px' : '250px')};
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 background-size: cover;
 border-radius:10px;
`;