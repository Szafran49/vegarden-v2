import Link from "./StyledLink";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from 'styled-components'

const StyledWrapper = styled.div`
    position:absolute;
    left:0;
`

export default function ReturnButton({ to }) {
    return (
        <StyledWrapper>
            <Link to={to}>
                <IconButton size="small">
                    <ArrowBackIcon /> Wróć
            </IconButton>
            </Link>
        </StyledWrapper>
    )
}