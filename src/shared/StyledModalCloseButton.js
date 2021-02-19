import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

const StyledCloseButton = styled(IconButton)`
    position:absolute;
    right:0;
    top:0;
`

export default (props) => <StyledCloseButton {...props} />;