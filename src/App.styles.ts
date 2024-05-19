import { createGlobalStyle, styled } from 'styled-components'

const LookAndFeel = createGlobalStyle`
    html, body {
        background: black;
        color: white;
        font-family: "Noto Sans", sans-serif;
        height: 100%;
        margin: 0;
    }

    #app {
        height: 100%;
    }
`

const Page = styled.div`
    height: 100%;
    overflow: hidden;
    transition: all .5s;

    &.hidden {
        height: 0;
    }
`

const Title = styled.h1`
    font-size: 7vw;
    margin: 20vw 0;
    text-align: center;
`

const Button = styled.div`
    border: 1px solid white;
    cursor: pointer;
    font-size: 5vw;
    margin: 16px;
    padding: 5px;
    text-align: center;

    &:active {
        background: silver;
    }
`

export {
    LookAndFeel,
    Page,
    Title,
    Button,
}
