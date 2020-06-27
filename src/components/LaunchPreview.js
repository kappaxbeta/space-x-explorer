import React from 'react'
import { NavLink } from 'react-router-dom'
import { Text , Box} from "grommet";
import Img from "react-cool-img";
import PropTypes from 'prop-types'

const LaunchPreview = (props) => {
    const { launch } = props;

    return (
        <NavLink to={`/l/${launch.flight_number}`} style={{textDecoration: "none"}}>
            <Box animation={{type: "fadeIn"}} overflow={"hidden"} margin={{"vertical":"small", "right": "medium"}} border={{ color: 'brand', size: 'small' }} height={"medium"} width={"medium"} direction={"row"} align={"end"} round={"small"} style={{position: "relative"}}>
              <Img cache={true} src={launch.links.flickr_images[0]} error={"/error.png"} placeholder={"/loading.gif"} width={"600"} />
               <Box  pad={"medium"} background={"white"}  round={"small"} margin={"large"} style={{position: "absolute", bottom: "1rem"}} >
                    <Text size={"xlarge"}>#{launch.flight_number}</Text>
                    <Text>{launch.mission_name}</Text>
                    <Text>{new Date(launch.launch_date_utc).toLocaleDateString("de-de")}</Text>
               </Box>
            </Box>
        </NavLink>
    )
};

LaunchPreview.propTypes = {
    launch: PropTypes.shape({
        flight_number: PropTypes.number.isRequired,
        mission_name: PropTypes.string.isRequired,
        launch_date_utc: PropTypes.string.isRequired,
        links: PropTypes.any
    })
};


export default LaunchPreview;
