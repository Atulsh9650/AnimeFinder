import axios from "axios"

export const fetchanimedetails=async(params:string | null):Promise<Animetype[]>=>{
        if(params === null){
            const respponse=await axios.get('https://anime-db.p.rapidapi.com/anime',{
                params: {
                    page: '5',
                    size: '40',
                    sortBy: 'ranking',
                    sortOrder: 'asc'
                  },
                  headers: {
                    'x-rapidapi-key': '1428c65caemsh7320f828195f114p1dfd6cjsn685fd908ac42',
                    'x-rapidapi-host': 'anime-db.p.rapidapi.com'
                  }
            })
            const data=respponse.data.data;
            return data;
        }
        else{
            const respponse=await axios.get('https://anime-db.p.rapidapi.com/anime',{
                params: {
                    page: '5',
                    size: '40',
                    sortBy: 'ranking',
                    sortOrder: 'asc',
                    genres:`${params}`
                  },
                  headers: {
                    'x-rapidapi-key': '1428c65caemsh7320f828195f114p1dfd6cjsn685fd908ac42',
                    'x-rapidapi-host': 'anime-db.p.rapidapi.com'
                  }
            })
            const data=respponse.data.data;
            return data;
        }
}