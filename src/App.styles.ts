import { createGlobalStyle } from 'styled-components'

const LookAndFeel = createGlobalStyle`
    @import url('/fonts/noto-sans/noto-sans-regular.ttf');
    @import url('/fonts/poetsen-one/poetsen-one-regular.ttf');

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


export {
    LookAndFeel,
}
