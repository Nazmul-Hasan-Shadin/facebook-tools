import axios, { Axios } from 'axios';



export const instance=Axios.create({
    baseURL:'http://localhost:3000'
})
const useAxiosPublic = () => {
    return instance
};

export default useAxiosPublic;