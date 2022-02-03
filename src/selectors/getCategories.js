import axios from 'axios';

export const getCategories = async () => {
    	
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
        const { data } = await axios.get(`${apiUrl}/categorys/`);
        //console.log(data.categorys);

        return (data);

    } catch (err) {
        return err;
    }
}


