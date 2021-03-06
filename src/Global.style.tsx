import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`   
    body,html{
        margin: 0;
        padding: 0;
        color: #DEDEDE;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0px;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
`

export const size = {
    sider: "30%"
}

export const color = {
    primary: "#181818",
    secondary: "#202020",
    btn: "#3137C9",
    btn_dangerous: "#CD251A"
}

export const Btn = styled.button<{ dangerous?: boolean }>`
    background-color: ${({ dangerous }) => (dangerous ? color.btn_dangerous : color.btn)};
    border: none;
    color: #fff;
    height: 40px;
    border-radius: 20px;
    transition: 1s;
    &:hover{
        cursor:pointer;
        background-color: ${({ dangerous }) => (dangerous ? '#e14237' : '#595ddc')};
    }
`

export const AppWrapper = styled.div`
    height:100%;
    background-color:#181d50;
`