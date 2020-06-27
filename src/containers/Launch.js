import React, { useEffect } from 'react'
import LaunchPreview from '../components/LaunchPreview'
import { useDispatch, useSelector } from 'react-redux'
import { getLaunches } from '../store/actions'
import {Box, Heading} from "grommet";

export default () => {
    const dispatch = useDispatch();
    const launches = useSelector(state => state.launches);
    useEffect(() => {
        dispatch(getLaunches())
    }, [dispatch]);

    return (
        <Box  pad={"small"} >
            <Heading>All SpaceX Launches</Heading>
            <Box  flex={false} fill="vertical" direction="row" wrap={true}>
                {launches.map((item, index) => {
                   return <LaunchPreview key={item.flight_number + "_launch"} launch={item}/>
                })}
            </Box>
        </Box>
    )
}
