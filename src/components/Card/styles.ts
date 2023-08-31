import styled, { css } from "styled-components/native";
import { TypeProps } from "../../@types/types";


export const PokemonCard = styled.TouchableOpacity<TypeProps>`
    ${({ theme, type }) => css`
        background-color: ${theme.colors.backgroundCard[type]};
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row;
        padding: 20px;
    `}
`
export const PokemonId = styled.Text`
    ${({ theme }) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.light_text};
        `}
`
export const LeftSide = styled.View`
    ${({ theme }) => css`
        width: 50%;
        position: relative;
    `}
`

export const ImageCardDetailLeftSide = styled.Image`
    ${({ theme }) => css`
      position: absolute;
      width: 74px;
      height: 32px;
      left: 90px;
      top: -10px
    `}
`

export const PokemonName = styled.Text`
    ${({ theme }) => css`
        font-weight: bold;
        font-size: 25px;
        line-height: 31px;
        margin-top: 5px;
        text-transform: capitalize;
        color: ${theme.colors.text_white};
    `}
`

export const PokemonContentType = styled.View`
    ${({ theme }) => css`
        flex-direction: row;
    `}
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

export const RightSide = styled.View`
    ${({ theme }) => css`
        justify-content: center;
        align-items: center;
        width: 50%;
        position: relative;
    `}
`
export const PokemonImage = styled.Image`
    margin-top: -40px;
    width: 130px;
    height: 130px;
`

export const PokeballDetail = styled.Image`
    position: absolute;
    right: -30px;
    top: -18px;
`