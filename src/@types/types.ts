import { TouchableOpacityProps } from "react-native";

export interface IAttributes {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface IAbilitys {
    ability: {
        name: string;
    };
}

export type PokemonTypes = {
    type: {
        name:
        | 'grass'
        | 'fire'
        | 'water'
        | 'poison'
        | 'normal'
        | 'bug'
        | 'flying'
        | 'eletric'
        | 'ground';
    };
};

export type PokemonType = {
    type: {
        name: string
    }
}

export type Pokemon = {
    name: string
    url: string
    id: number
    stats: IAttributes[]
    abilities: IAbilitys[]
    types: PokemonTypes[]
}

export type CardProps = {
    data: Pokemon
    // onPress: () => void
} & TouchableOpacityProps

export type RouteParams = {
    pokemon: Pokemon
}

export type TypeName =
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground';

export type TypeProps = {
    type: TypeName
}