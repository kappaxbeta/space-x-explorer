import React from 'react'
import {Box, Text, Heading} from "grommet";
import Img from "react-cool-img";
import PropType from "prop-types";

const RenderImages = (props) => {
    const { img } = props;
    return <Box animation={{type: "fadeIn"}} flex={"shrink"} overflow={"hidden"} margin={"small"}>
        <Img src={img} placeholder={"/loading.gif"} width={"300"}/>
    </Box>
};

const RenderLinks = (props) => {
    const { links } = props;
    if(!links.flickr_images) return null;

    return (<Box pad={"small"} flex={false} fill="vertical" direction="row" wrap={true}>
        {links.flickr_images.map((img, i) => (
            <RenderImages key={"flicker-" + img} img={img} />
        ))}
    </Box>);
};


const LunchDetail = (props) => {
    const {launch} = props;

    if(launch) {
        return <Box pad={"small"}>
            <Heading>{launch.mission_name}</Heading>
            <Text>#{launch.flight_number}</Text>
            <Text>{launch.details}</Text>
            <RenderLinks links={launch.links} />
            </Box>;
    } else {
        return <></>;
    }
};

LunchDetail.propType = {
    launch: PropType.shape({
        mission_name: PropType.string,
        flight_number: PropType.number.isRequired,
        launch_success: PropType.bool,
        details: PropType.string,
        links: PropType.shape({
            flickr_images: PropType.array,
        })
    })
};

export default LunchDetail;
