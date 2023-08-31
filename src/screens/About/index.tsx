import React from "react";
import { RouteParams } from "../../@types/types";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons"
import { FadeAnimation } from "../../components/FadeAnimation";
import { uriImages } from "../../services/api";
import circle from '../../assets/img/circle.png'
import dotsImage from '../../assets/img/dots.png'
import * as S from './styles'
import theme from "../../global/styles/theme";

export function About() {
    const { goBack } = useNavigation()
    const { pokemon } = useRoute().params as RouteParams
    const { colors } = useTheme()
    const currentType = pokemon.types[0].type.name
    const color = colors.backgroundCard[currentType]

    return <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <S.Header type={pokemon.types[0].type.name} >
            <S.BackButton onPress={() => { goBack() }}>
                <Feather name="chevron-left" size={24} color="#fff" />
            </S.BackButton>

            <S.ContentImage>
                <S.CircleImage source={circle} />
                <FadeAnimation>
                    <S.PokemonImage
                        source={{ uri: `${uriImages}${pokemon.id}.png` }} />
                </FadeAnimation>
            </S.ContentImage>

            <S.Content>
                <S.PokemonId>#{pokemon.id}</S.PokemonId>
                <S.PokemonName>{pokemon.name}</S.PokemonName>

                <S.PokemonTypeContainer>
                    {pokemon.types.map(pokemonType =>
                        <S.PokemonType key={pokemonType.type.name} type={pokemonType.type.name} >
                            <S.PokemonTypeText key={pokemonType.type.name}>
                                {pokemonType.type.name}
                            </S.PokemonTypeText>
                        </S.PokemonType>)}
                </S.PokemonTypeContainer>
            </S.Content>
            <S.DotsImage source={dotsImage} />
        </S.Header>

        <S.Container>
            <S.Title type={pokemon.types[0].type.name}>Base Stats</S.Title>

            {pokemon.stats.map(attribute =>
                <S.StatsBar key={attribute.stat.name}>
                    <S.Attributes>{attribute.stat.name}</S.Attributes>
                    <S.AttributeValue>{attribute.base_stat}</S.AttributeValue>
                    <S.ContentBar>
                        <S.ProgressBar
                            progress={attribute.base_stat}
                            color={theme.colors.backgroundCard[pokemon.types[0].type.name]}
                            width={attribute.base_stat}
                            borderWidth={1}
                            borderColor={theme.colors.boxType[pokemon.types[0].type.name]}
                        />
                    </S.ContentBar>
                </S.StatsBar>
            )}
            <S.Title type={pokemon.types[0].type.name}>Abilities</S.Title>
            {pokemon.abilities.map(pokemonAbility =>
                <S.Ability>{pokemonAbility.ability.name}</S.Ability>
            )}
        </S.Container>
    </ScrollView >
}