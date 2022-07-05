import { StyledButton } from "./Button.styled"

export const Button = ({onClick, onScroll}) => {
    return (
        <StyledButton onClick={onClick}>Load more</StyledButton>
    )
}