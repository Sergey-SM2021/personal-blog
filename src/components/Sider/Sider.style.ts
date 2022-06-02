import styled from 'styled-components';
import { Btn, color, size } from '../../Global.style'

export const SidebarWrapper = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: ${color.secondary};
    width: ${size.sider};`

export const Bg = styled.img`
    object-fit:cover;
    width: 100%;
`

export const Ava = styled.img`
    object-fit:cover;
    object-position: center;
    max-width: 100px;
    border-radius: 100%;
    margin: 0 0 18px 0;
`

export const PersonalData = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: -20% 0 0 0;
    text-align: center;
    padding: 0 20px;
`

export const Name = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    color:#fff;
`

export const Job = styled.div`
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    margin: 0 0 18px 0;
`

export const SocialNetworks = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    gap: 10px;
`

export const SocialNetwork = styled.img`

`

export const Desc = styled.div`
    padding: 30px 0;
    text-align: center;
`

export const Footer = styled.div`
    padding: 30px 0;
    display: flex;
    gap: 10px;
    flex-wrap:wrap;
`

export const MyWork = styled(Btn)`
    flex: 1 1 auto;
`

export const SendMe = styled(Btn)`
    flex: 1 1 auto;
`