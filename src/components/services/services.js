import axios from "axios";
//END POINT Pokemon
const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

export const getApiPoke = async () => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
};


// export const postNewUser = async (newUser) => {
//     try {
//         await axios.post(URL_API_USERS, newUser);
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// };