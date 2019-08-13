import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        'React Native',
        'ReactJS',
        'Node JS'
    ],
    inpuTitileEnter:''
}

function courses(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_COURSE':
            return { ...state, data: [ ...state.data, action.title ]}
        case 'INPUT_TITLE_CHANGE':
                return { ...state, inpuTitileEnter: action.title }
        default:
            return state
    }
}

const store = createStore(courses)

export default store;