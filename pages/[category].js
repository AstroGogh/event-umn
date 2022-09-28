import {fetchAPI} from '../libs/api'
import Events from '../components/events';
import Layout from '../components/layout';

export default function Category({events, categories}) {
    return (  
        <Layout categories={categories}>
            <Events events={events}/>
        </Layout>
    );
}

export async function getStaticPaths(){
    const categoriesRes = await fetchAPI('/categories', {fields: ["slug"] });

    const paths = categoriesRes.data.map((category) => {
        return {
            params: {category: category.attributes.slug}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    console.log("params:", params)

    const categoriesRes = await fetchAPI('/categories', {
        filters : {
            slug: params.category
        },
        populate: 'deep'
    })

    const allCategRes = await fetchAPI('/categories');

    return{
        props: {
            categories: allCategRes.data,
            events: categoriesRes.data[0].attributes.events.data
        }
    }
}