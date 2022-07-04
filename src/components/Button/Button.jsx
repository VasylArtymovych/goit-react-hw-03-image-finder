import { StyledBtn } from "./Button.styled"

export const Button = ({onClick, onScroll}) => {
    onScroll()
    return (
        <StyledBtn onClick={onClick}>Load more</StyledBtn>
    )
}