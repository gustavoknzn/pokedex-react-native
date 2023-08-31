import styled, { css } from "styled-components/native";
import { TypeProps } from "../../@types/types";
import * as Progress from 'react-native-progress'

export const Header = styled.View<TypeProps>`
    ${({ theme, type }) => css`
        background-color: ${theme.colors.backgroundCard[type]};
        height: 285px;
        padding: 20px;
        flex-direction: row;
        align-items: center;
        position: relative;
    `}
`

export const BackButton = styled.TouchableOpacity`
    ${({ theme }) => css`
        position: absolute;
        top: 50px;
        left: 20px;
    `}
`

export const ContentImage = styled.View`
        position: relative;
`

export const CircleImage = styled.Image`
        width: 125px;
        height: 125px;
        position: absolute;
`

export const PokemonImage = styled.Image`
        width: 125px;
        height: 125px;
`
export const Content = styled.View`
        margin-left: 30px;
`
export const PokemonId = styled.Text`
    ${({ theme }) => css`
        font-size: 16px;
        line-height: 19px;
        font-style: normal;
        font-weight: bold;
        color: ${theme.colors.light_text}
    `}
`

export const PokemonName = styled.Text`
    ${({ theme }) => css`
        text-transform: capitalize;
        font-size: 28px;
        line-height: 38px;
        font-style: normal;
        font-weight: bold;
        color: ${theme.colors.text_white}
    `}
`
export const PokemonTypeContainer = styled.View`
    flex-direction: row;
`

export const PokemonType = styled.View<TypeProps>`
    ${({ theme, type }) => css`
        background-color: ${theme.colors.boxType[type]};
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 3px;
        margin-top: 5px;
        margin-left: 5px;
        justify-content: center;
        align-items: center;
    `}
`

export const PokemonTypeText = styled.Text`
    ${({ theme }) => css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.text_white};
        text-transform: capitalize;
    `}
`

export const DotsImage = styled.Image`
    width: 85px;
    position: absolute;
    right: -20px;
    top: 220px;
`

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        padding: 20px;
        background-color: ${theme.colors.background};
        border-top-right-radius: 40px;
        border-top-left-radius: 40px;
        margin-top: -40px;
    `}
`

export const Title = styled.Text<TypeProps>`
    ${({ theme, type }) => css`
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        padding: 20px;
        color: ${theme.colors.boxType[type]};
    `}
`

export const StatsBar = styled.View`
    width: 100%;
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;

`

export const Attributes = styled.Text`
    ${({ theme }) => css`
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        width: 110px;
        text-transform: capitalize;
        color: ${theme.colors.light_text};
    `}
`

export const AttributeValue = styled.Text`
    ${({ theme }) => css`
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-left: 20px;
        color: ${theme.colors.detail};
    `}
`

export const ContentBar = styled.View`
    margin-left: 35px;
`

export const ProgressBar = styled(Progress.Bar)`
`
export const Ability = styled.Text`
    ${({ theme }) => css`
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        padding: 10px 20px;
        text-transform: capitalize;
        color: ${theme.colors.detail};
`}`