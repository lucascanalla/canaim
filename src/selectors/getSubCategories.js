import axios from 'axios';

export const getSubCategories = async ( category ) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
        const { data } = await axios.get(`${apiUrl}/subcategorys/${category}`);
        return data;
    } catch (err) {
        return err;
    }

}
