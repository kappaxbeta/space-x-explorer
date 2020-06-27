import * as t from './actions'

const initial = {
    launches: []
};

export default (state = initial, action) => {
    const { type, payload } = action;
    switch (type) {
        case t.SET_LAUNCHES:
            return (Array.isArray(payload)) ? ({ ...state, launches: payload }) : ({ ...state, launches: state.launches.concat(payload) });
        default:
            return state
    }
}
