import { getStrapiURL } from './api'

export function getImageURL(media) {

    try {
        const { url } = media.data.attributes
        const imageURL = url.startsWith('/') ? getStrapiURL(url) : url
        return imageURL;
    }
    catch(error){
        console.log(error);
        return;
    }
}