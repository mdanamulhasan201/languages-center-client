import { useQuery } from '@tanstack/react-query';

const InstructorUse = () => {
    const { data: classes = [], isLoading: loading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(' https://language-center-server.vercel.app/classes');
            return res.json()
           
        }

    })

    return [classes, loading]

};

export default InstructorUse;