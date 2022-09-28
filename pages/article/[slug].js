import { Text, Title, Group, Stack, SimpleGrid, Container, Skeleton, Grid, Badge, Divider } from "@mantine/core";
import { fetchAPI } from '../../libs/api'
import { getDate } from "../../libs/date";
import Organizer from '../../components/organizer'
import BadgeSkkm from "../../components/badgeSkkm";
import Layout from "../../components/layout";

export default function Event({ event, categories }) {
    const { title, description, publishedAt, organizer,
        dateOpen, dateClose, category, skkms } = event.attributes

    return (
        <Layout categories={categories}>
            <Container my={'xl'}>
                <Stack>
                    <div>
                        <Title order={2} transform={'uppercase'}>
                            {title}
                        </Title>
                        <Text color='dark.3' transform="uppercase" weight={'bold'} size={'md'}>
                            {category.data.attributes.title}
                        </Text>
                    </div>

                    <Group my={"lg"}>
                        <Organizer organizer={organizer} />
                        |
                        <Text color='dark.2' weight={'bold'} size={'sm'} transform={'uppercase'}>
                            {getDate(publishedAt)}
                        </Text>
                    </Group>

                    <Text align="justify" size={'lg'}>
                        {description}
                    </Text>

                    <Divider my={'xl'} />
                    <Group position={'apart'}>
                        <Group>
                            <Text size={'md'} weight={'bold'}>
                                BENEFITS:
                            </Text>
                            <BadgeSkkm skkms={skkms} />
                        </Group>
                        <Group>
                            <Text size={'md'} weight={'bold'}>
                                REGISTRATION:
                            </Text>
                            <Text size={'md'} weight={'bold'} transform={'uppercase'} color='dark.2'>
                                {getDate(dateOpen)} {dateClose ? `- ${getDate(dateClose)}` : ''}
                            </Text>
                        </Group>
                    </Group>
                </Stack>
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ params }) {

    const eventRes = await fetchAPI("/events", {
        filters: {
            slug: params.slug,
        },
        populate: 'deep'
    })

    const categoriesRes = await fetchAPI("/categories");

    return {
        props: { 
            categories: categoriesRes.data,
            event: eventRes.data[0] 
        },
        revalidate: 1,
    }
}

export async function getStaticPaths() {
    const eventsRes = await fetchAPI("/events", { fiels: ["slug"] });

    const paths = eventsRes.data.map((event) => {
        return {
            params: { slug: event.attributes.slug }
        }
    })

    return {
        paths,
        fallback: false,
    };
}
