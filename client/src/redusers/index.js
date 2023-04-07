import archive from "../pages/Archive";

const initialState = {
    posts: [
        {
            id: 1,
            title: 'title for post',
            data: '24.03.2023 20:21',
            desc: 'description for the interesting post',
            img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg'
        },
        {
            id: 2,
            title: 'title for post 2',
            data: '24.03.2023 20:21',
            desc: 'description for the interesting post 2',
            img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg'
        },
        {
            id: 3,
            title: 'title for post 3',
            data: '22.03.2023 20:21',
            desc: 'description for the interesting post 3',
            img: 'https://img.freepik.com/free-vector/flat-adventure-background_23-2149054484.jpg'
        },
        {
            id: 4,
            title: 'title for post 4',
            data: '21.03.2023 20:21',
            desc: 'description for the interesting post 4',
            img: 'https://img.freepik.com/premium-vector/landscape-forest-and-river-at-daytime_46176-156.jpg'
        },
        {
            id: 5,
            title: 'title for post 5',
            data: '23.03.2023 20:21',
            desc: 'description for the interesting post 5',
            img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg'
        },
    ],
    archive: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARCHIVE':
            return {...state,
                archive: [...state.archive, state.posts.find(post => post.id === action.id)],
                posts: [...state.posts.filter(post => post.id !== action.id)]
            }
        case 'CREATE_POST':
            return {...state, posts: [...state.posts, action.data]}
        case 'REMOVE_POST':
            return {...state, posts: [...state.posts.filter(post => post.id !== action.id)]}
        default:
            return state
    }
}
