import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);

    const {refetch, data: cart = [], error } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const responsive = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return responsive.json()
        },
    })

    return [cart, refetch]

}

export default useCart;
