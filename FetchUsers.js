import {useQuery,gql} from "@apollo/client";

// import { useQuery } from '@apollo/react-hooks'


const GET_MY_TODOS = gql`
    query MyQuery {
        users {
            email
            id
        }
    }
`

const FetchUsers = () => {

    const { loading, error, data } = useQuery(GET_MY_TODOS);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

    // return <></>;

    // const {data} = useQuery(GET_MY_TODOS);
    console.log(data)
// ローディング中の表示
//     if (loading) return <p>loading</p>
// // エラー時の表示
//     if (error) return <p>{error.toString()}</p>
//　成功してデータが帰ってきた時の表示
//     return (
//         <>
//             {data.users[0]}
//         </>
//     );
}

export default FetchUsers
