import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Accept-Version"]="v1"

export const SearchImage = async (query,page) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: query,
            client_id: "x8kuWwX1aZMbb0FevO4ghP-fm2gzESVOaW8Mw1C6Cr8",
            page,
            per_page: 12
        }
    })
    return response.data.results
};