import axiosIns from "./config";

export const testAPI = async () => {
    try {
        const response = await axiosIns.get("/api/users/2");
        if (response.status) {
            return response.data;
        } else return response.err;
    } catch (error) {
        console.error(error);
    }
};

export const getListRestaurant = async () => {
    try {
        const response = await axiosIns.get("/restaurant");
        if (response.status && response.data.status) {
            return response.data.data;
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
        const response = await axiosIns.get(URL);
        if (response.status) {
            return response.data;
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};

export const getDishOfRestaurant = async (query = "", page = 1) => {
    try {
        const URL = `/search?query=${query}&page=${page}`;
        const response = await axiosIns.get(URL);
        if (response.status) {
            return response.data;
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};

export const getSearchDish = async (query = "", page = 1) => {
    try {
        const URL = `/search?query=${query}&page=${page}`;
        const response = await axiosIns.get(URL);
        if (response.status) {
            return response.data;
        } else {
            return response.err;
        }
    } catch (error) {
        console.error(error);
    }
};
