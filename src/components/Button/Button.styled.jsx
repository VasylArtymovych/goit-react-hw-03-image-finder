import styled from "styled-components";

export const StyledBtn = styled('button')`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 250px;
    height: 35px;
    margin: 0 auto;
    color: ${p => p.color || p.theme.colors.white};
    background-color:  ${p => p.color || p.theme.colors.background};
`;