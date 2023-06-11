import { useQuery } from '@tanstack/react-query';

const InstructorUse = () => {
    const { data: users = [], isLoading: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json()
           
        }

    })

    return [users, loading]

};

export default InstructorUse;