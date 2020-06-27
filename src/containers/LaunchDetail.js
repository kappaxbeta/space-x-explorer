import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLaunches } from '../store/actions'
import {Box} from "grommet/es6";
import LunchDetail from "../components/LunchDetail";

export default () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const launches = useSelector(state => state.launches);
    const launch = launches[launches.length-1];

    useEffect(() => {
        dispatch(getLaunches(id));
    }, [dispatch, id]);

    return (
        <Box pad={"medium"} flex={false} fill="vertical" direction="row">
            <LunchDetail launch={launch}/>
        </Box>
    )
}
