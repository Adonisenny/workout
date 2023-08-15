import axios from 'axios';
import { useEffect,useState } from 'react';


const UseFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

useEffect (() => {
    const fetchData = async() => {
        try {
            setLoading(true)
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)



    }
    fetchData()
},[url])


return {data,loading,error}



}
export default UseFetch