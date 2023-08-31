import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.colors.backgroundWater};
        flex: 1;
    `}
`
export const Content = styled.View`
    ${({ theme }) => css`
        height: 70%;
        justify-content: center;
        align-items: center;
    `}
`
export const WrapperAnimation = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.colors.types.water};
        width: 200px;
        height: 300px;
        border-radius: 100px;
        justify-content: center;
        align-items: center;
        transform: rotate(30deg);
    `}
`

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
`

export const Footer = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.colors.text_white}
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        justify-content: center;
        align-items: center;
        padding: 20px;
    `}
`
export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.background};
        font-size: 40px;
        margin-top: 20px;
    `}
`
export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.background};
        font-size: 14px;
        margin-top: 16px;
    `}
`