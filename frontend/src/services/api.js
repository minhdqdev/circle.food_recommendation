import { axiosBE, axiosES } from "./config";
import { location } from "../utils/Constant";

export const testAPI = async () => {
    try {
        const response = await axiosBE.get("/api/users/2");
        if (response.status) {
            return response.data;
        } else return response.err;
    } catch (error) {
        console.error(error);
    }
};

export const getListRestaurant = async (
    keywords = "",
    size = 50,
    latitude = location.latitude,
    longitude = location.longitude,
    distance
) => {
    try {
        const URL = `/api/search?keywords=${keywords}&latitude=${latitude}&longitude=${longitude}&size=${size}&distance=2km`;
        const response = await axiosES.post(URL);
        if (response.status === 200) {
            return response.data.hits.hits.map((item) => {
                return { id: item._id, ...item._source.delivery_detail };
            });
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};

export const getNearRestaurant = async (
    size = 20,
    latitude = location.latitude,
    longitude = location.longitude
) => {
    try {
        const URL = `/api/recommender?latitude=${latitude}&size=${size}&distance=2km`;
        const response = await axiosES.post(URL);
        if (response.status === 200) {
            return response.data.hits.hits.map((item) => {
                return { id: item._id, ...item._source.delivery_detail };
            });
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};

export const getDetailRestaurant = async (restaurantId) => {
    try {
        const URL = `/restaurant/${restaurant}`;
        const response = await axiosBE.get(URL);
        if (response.status) {
            return response.data;
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};

export const getDishOfRestaurant = async (restaurantId = 0) => {
    try {
        const URL = `/restaurant/${restaurantId}/dish`;
        const response = await axiosBE.get(URL);
        if (response.status && response.data.status) {
            return response.data.data;
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};

export const getSearchDish = async (query = "", page = 1) => {
    try {
        const URL = `/search`;
        //const URL = `/search?query=${query}&page=${page}`;
        const response = await axiosBE.get(URL);
        if (response.status && response.data.status) {
            return response.data.data;
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};
