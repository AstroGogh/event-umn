import { Footer, Group, Center, createStyles, Text, Highlight } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    footer: {
        position: 'relative',
        bottom: 0,
        borderTop: `0.1px solid ${theme.colors.gray[4]}`,
    }
}))

function Footers() {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <Center py={'md'}>
                <Highlight highlight='CT' weight={'600'} color='dark.4'>
                    {/* <Text color='dark.4' weight={'bolder'} transform={'uppercase'}> */}
                        Made by CT with &#10084; and JS
                    {/* </Text> */}
                </Highlight>
            </Center>
        </footer>
    );
}

export default Footers;