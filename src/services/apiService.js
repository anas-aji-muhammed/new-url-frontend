import axiosInstance from './axiosInstance';

// Fetch all links 
export const fetchAllLinks = async () => {
    try {
        const response = await axiosInstance.get('getUrls');
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the items', error);
        throw error;
    }
};
// Fetch  links details
export const fetchLinkDetails = async (urlId) => {
    try {
        const response = await axiosInstance.get(`analytics/${urlId}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the items', error);
        throw error;
    }
};

// Add more service functions as needed
