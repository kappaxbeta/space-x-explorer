import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getLaunches} from "../store/actions";
import LaunchPreview from "../components/LaunchPreview";
import { Heading } from "grommet";
import {Box} from "grommet";

const RenderLastOne = (props) => {
    const { launches } = props;
    
    
    if(launches.length === 1) {
        return <LaunchPreview launch={launches[0]}/>
    } else if (launches.length >= 2 ) {
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
        <Box margin={"medium"}>
            <Heading>Latest SpaceX Launch</Heading>
            <RenderLastOne launches={launches}/>
        </Box>
    )
}
