import qs from "qs"

function getStrapiURL(path = ""){
    return `${
        process.env.STRAPI_URL || 'http://localhost:1337'
    }${path}`;
}

async function fetchAPI(path, paramsObj={}, options={}){
    const {headers, ...option} = options
    const mergedOption = {
        headers: {
            "Content-Type": "application/json",
            ...headers 
        },
        ...option
    }

    const queryStr = qs.stringify(paramsObj)
    const reqURL = `${getStrapiURL(`/api${path}${queryStr? `?${queryStr}` : ""}`)}` 

    console.log(reqURL)
    const res = await fetch(reqURL, mergedOption)

    if(res.status == 200){
        const resJSON = await res.json();
        return resJSON;
    }

    console.log(`${res.status} :Fetching Error`)
    return;
}

module.exports = {
    fetchAPI,
    getStrapiURL
};