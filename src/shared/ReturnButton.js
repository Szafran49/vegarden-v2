import Link from "./StyledLink";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function ReturnButton({ to }) {
    return (
        <Link to={to}>
            <IconButton size="small">
                <ArrowBackIcon /> Wróć
        </IconButton>
        </Link>
    )
}