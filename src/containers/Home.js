import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getLaunches} from "../store/actions";
import LaunchPreview from "../components/LaunchPreview";
import { Heading } from "grommet";
import {Box} from "grommet";

const RenderLastOne = (props) => {
    const { launches } = props;
    
    if(launches.length === 1) {
        // In the first call it just get the recent so its on 0
        return <LaunchPreview launch={launches[0]}/>
    } else if (launches.length >= 2 ) {
        // When we load all we, put it on the end of the array
        return <LaunchPreview launch={launches[launches.length - 1]} />
    }
    return <></>
};

export default () => {
    const dispatch = useDispatch();
    const launches = useSelector(state => state.launches);
    useEffect(() => {
        dispatch(getLaunches("LATEST"))
    }, [dispatch]);

    return (
        <Box margin={"small"}>
            <Heading>Latest SpaceX Launch</Heading>
            <RenderLastOne launches={launches}/>
        </Box>
    )
}
