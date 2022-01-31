import axios from 'axios'

export const getProductsBySubCategory = async (subcategory) => {
	const apiUrl = process.env.REACT_APP_API_URL;
    try {
        const { data } = await axios.get(`${apiUrl}/products/${subcategory}`);
        //console.log(data);
        return data;
    } catch (err) {
        return err;
    }

}

