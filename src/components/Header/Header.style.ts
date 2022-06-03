import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const HeaderLink = styled(Link)`
    color: #fff;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    position:relative;
    letter-spacing: 0px;
    &:hover{
        cursor:pointer;
        text-decoration: underline;
    }
`

export const HeaderMain = styled(HeaderLink)`
`

export const HeaderArtical = styled(HeaderLink)`
    
`


export const HeaderAbout = styled(HeaderLink)`
    
`

export const HeaderAdvertisement = styled(HeaderLink)`
    
`

export const HeaderProfile = styled(HeaderLink)`
    flex:1 1 auto;
`


export const HeaderSearch = styled.input`
    
`

