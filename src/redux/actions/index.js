export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_JOBS = 'GET_JOBS'

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='


export const addFavoriteAction = (favorite) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const removeFavoriteAction = (favorite) => {
    return {
        type: REMOVE_FAVORITE,
        payload: favorite
    }
}

export const getJobsAction = (query) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_JOBS,
                    payload: data,
                })
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }
    }
}
