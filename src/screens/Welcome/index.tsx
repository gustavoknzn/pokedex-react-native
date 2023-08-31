import React from "react";
import * as S from './styles'
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from './pokemon.json'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
    const { navigate } = useNavigation()

    function handleNavigation() {
        navigate('Home')
    }

    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <AnimatedLottieView
                        style={{ width: 200 }} source={pokemonAnimation} autoPlay loop />
                </S.WrapperImage>
            </S.WrapperAnimation>
            <S.Title>Bem-vindo!</S.Title>
            <S.SubTitle>Encontre todos os Pokemons em um só lugar!</S.SubTitle>
        </S.Content>
        <S.Footer>
            <Button title='Iniciar' onPress={handleNavigation} />
        </S.Footer>
    </S.Container>

}