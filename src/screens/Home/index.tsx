import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../../components/Card";
import api from "../../services/api";
import pokeball from '../../assets/img/pokeball.png'
import { Pokemon } from "../../@types/types";
import * as S from './styles'

export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const { navigate } = useNavigation()

    function handleNavigation(pokemon: Pokemon) {
        navigate('About', { pokemon })
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        api.get('pokemon').then((response) => {
            const responseArray = [...response.data.results]
            const promisesArray = responseArray.map(async (item) => {
                const result = await api.get(item.url)
                return result.data
            })

            Promise.all(promisesArray).then((values) => {
                setPokemons(values)
            })
        })
    }

    return <S.Container>
        <FlatList
            ListHeaderComponent={<>
                <S.Header source={pokeball} />
                <S.Title>Pokedex</S.Title>
            </>
            }
            contentContainerStyle={{
                paddingHorizontal: 20,
                bottom: 12
            }}
            data={pokemons}
            keyExtractor={pokemon => pokemon.id.toString()}
            renderItem={({ item: pokemon }) => (
                <Card data={pokemon} onPress={() => {
                    handleNavigation(pokemon)
                }} />
            )}
        />
    </S.Container>
}