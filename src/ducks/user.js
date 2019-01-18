initialState={
    user:{}
}

const GET_USER_DATA = 'GET_USER_DATA';

export function GetUserData(userInfo) {
    console.log('reducer', action.payload)
    return {
        type: GET_USER_DATA,
        payload: userInfo
    }
}


export default function reducer(state = initialState, action) 
{switch (action.type) {
    case GET_USER_DATA:
        return { ...state, user: action.payload };
    
    }

}