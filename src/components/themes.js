import { createGlobalStyle } from "styled-components"

export const darkTheme = {
    body :  "#fff",
    fontColor: "#000"
}

export const lightTheme = {
    body :  "#000",
    fontColor: "#fff"
}

export const GlobalStyles = createGlobalStyle`
     body{
        background-color: ${(props) => props.theme.body};
     }

`