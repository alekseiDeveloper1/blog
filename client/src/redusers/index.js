
const initialState = {
    posts: [],
    archive: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            console.log(action.data)
            return {...state, posts: [...state.posts, ...action.data]}
        case 'ADD_ARCHIVE':
            return ({...state,
                archive: [...state.archive, state.posts.find(post => post._id === action.id)],
                posts: [...state.posts.filter(post => post._id !== action.id)]
            })

        case 'REMOVE_POST':
            return {...state, posts: [...state.posts.filter(post => post.id !== action.id)]}
        default:
            return state
    }
}
