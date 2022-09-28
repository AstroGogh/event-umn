import {
    createStyles, Card, Stack, Group, Text, Skeleton, Badge
} from "@mantine/core";
import EventImage from "./eventImage";
import Organizer from "./organizer";
import Link from 'next/link';
import {getDate} from '../libs/date';
import {getStrapiURL} from '../libs/api'
import BadgeSkkm from './badgeSkkm';

const useStyles = createStyles((theme) => ({
    container: {
        display: "inline-block",
    },
    clickable: {
        textDecoration: 'none',
    },
    badge: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.2em',

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: 'none',
        },
    },
}))

export default function EventCard({ event }) {
    const { classes } = useStyles();
    const { title, image, slug, organizer, category, skkms, publishedAt } = event.attributes;

    const {title: titleCategory, slug: slugCategory} = category.data.attributes;

    return (
        <Link href={`/article/${slug}`}>
            <a className={classes.clickable}>
                <Card shadow={'xs'} mb={'md'}>
                    <Card.Section>
                        <EventImage image={image} />
                    </Card.Section>
                    <Stack mt={'md'}>
                        <Group position="left">
                            <Text size={'xs'} weight={"bold"} transform={"uppercase"} color="gray.5" align="left">
                                {titleCategory}
                            </Text>                    
                            <BadgeSkkm skkms={skkms} showOne/>        
                        </Group>

                        <Text size={"lg"} weight={"bolder"} transform={"uppercase"}>
                            {title}
                        </Text>

                        <Group position="left">
                            <Organizer organizer={organizer} />
                            <Text size={'xs'} weight={'bold'} color="gray.5" transform="uppercase">
                                {getDate(publishedAt, "MMM DD YYYY")}
                            </Text>
                        </Group>
                    </Stack>
                </Card>
            </a>
        </Link>
    );
}