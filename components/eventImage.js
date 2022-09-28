import { Image } from "@mantine/core";
import { getImageURL } from "../libs/media";

function EventImage({image}) {
    const {alternativeText} = image.data.attributes;

    return (  
        <Image 
            height = {"auto"}
            width = {"100%"}
            fit="contain"
            src={getImageURL(image)}
            alt={alternativeText || ""}
        />
    );
}

export default EventImage;