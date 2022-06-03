import styled from "styled-components";
import { color } from "../../Global.style";
import { HeaderLink } from "./Header.style";

export const DropdownLink = styled(HeaderLink)`
`

export const DropdownList = styled.div<{ isVisible?: boolean }>`
    visibility: ${({ isVisible }) => (isVisible ? 1 : 0)};
    opacity:${({ isVisible }) => (isVisible ? 1 : 0)};
    display:${({ isVisible }) => (isVisible ? "block" : "none")};
    position:absolute;
    top:-10px;
    min-width:100%;
    width:auto;
    left:0;
    z-index:1;
    background-color:${color.btn};
    padding: 10px;
`

export const DropdownMenuWrapper = styled(DropdownLink)`
    position:relative;
    &:hover{
        cursor:pointer;
        background-color:#34f;
    }
`