import { TYPE } from "../constants";
import { pokeAxios } from "../services";

export const getTypes = async () => {
    try {
        const { data } = await pokeAxios.get(`${TYPE}`);

        return data.results
    } catch (error) {
        console.error(error);
    }
};
