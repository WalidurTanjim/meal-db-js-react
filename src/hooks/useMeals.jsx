import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMeals = () => {
    const { data: meals = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['meals'],
        queryFn: async() => {
            const res = await axios.get('www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await res.data || [];
            return data;
        }
    });

    return [ meals, isPending, isError, error, refetch ];
};

export default useMeals;