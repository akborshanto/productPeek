import axios from 'axios';

 const axiosPublic=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    // timeout:1000,
    // headers: {
    //     'Content-Type': 'application/json',
    
    //   },
})
const useAxiosPublic=()=>{
    return axiosPublic


}
export default useAxiosPublic;