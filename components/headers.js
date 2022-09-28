import { Header, Group, Image, createStyles, Text, Container } from "@mantine/core";
import Link from "next/link";

const NAVBAR_HEIGHT = 60
const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: NAVBAR_HEIGHT,
    },
    anchor: {
        textDecoration: 'none',
        color: theme.colorScheme == 'dark' ? 'white' : 'black',
        fontWeight: 'bold',

        '&:hover': {
            backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            padding: '5px',
            borderRadius: '10px',
        }
    }
}))


function Headers({ categories }) {
    const { classes } = useStyles();

    const categoryArr = categories.map((category, index) => {
        console.log("Category:", category);

        const { title, slug } = category.attributes
        return (
            <a
                className={classes.anchor}
                href={`/${slug}`}
                key={index}
            >
                {title}
            </a>
        )
    })

    return (
        <Header height={NAVBAR_HEIGHT}>
            <Container className={classes.inner} px={0}>
                <Link href="/">
                    <Text size={'xl'} weight={'bolder'}>EventUMN</Text>
                </Link>
                <Group spacing={'lg'}>
                    {categoryArr}
                </Group>
            </Container>
        </Header>
    );
}

export default Headers;