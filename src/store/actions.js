import axios from 'axios'
export const SET_LAUNCHES = 'SET_LAUNCHES';

export const setLaunches = (data) => {
    return { type: SET_LAUNCHES, payload: data }
};

function fetchLaunches() {
    return axios.get('https://api.spacexdata.com/v3/launches');
}

function fetchLaunchByNumber(id) {
    return axios.get(`https://api.spacexdata.com/v3/launches/${id}`);
}

function fetchLaunchLatest() {
    return axios.get('https://api.spacexdata.com/v3/launches/latest');
}

export const getLaunches = (id) => {
    return dispatch => {
        if (!id) {
            fetchLaunches()
                .then(({ data }) => dispatch(setLaunches(data)))
                .catch(console.log)
        } else if (id === 'LASTEST')
        {
            fetchLaunchLatest()
                .then(({ data }) => dispatch(setLaunches(data)))
                .catch(console.log)

        } else {
            fetchLaunchByNumber(id)
                .then(({ data }) => dispatch(setLaunches(data)))
                .catch(console.log)
        }
    }
};

