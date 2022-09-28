import { Title, Text } from "@mantine/core"
import Layout from "../components/layout"
import Events from "../components/events"
import { fetchAPI } from "../libs/api"


export default function Home({ events, categories }) {

  return (
    <>
      <Layout categories={categories}>
        <Events events={events} />
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {

  const resEvents = await fetchAPI('/events', { populate: 'deep' })
  const resCategories = await fetchAPI('/categories')

  return {
    props: {
      events: resEvents.data,
      categories: resCategories.data
    }
  }
}
