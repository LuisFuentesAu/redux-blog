import jsonPlaceholder from '../apis/jsonPlacerholder'

export const fetchPosts = async () => async dispatch =>{
    const response = await jsonPlaceholder.get('/posts')
    dispatch({type: "FETCH_POSTS", payload: response})
  }
