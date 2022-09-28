import { ClassNames } from "@emotion/react";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    masonry: {
        columnGap: '1em',

        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            columns: 3
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            columns: 2
        },
        [`@media (max-width: ${theme.breakpoints.xs}px)`] : {
            columns: 1
        }
    }
}))

function Masonry({ children }) {
    const { classes } = useStyles();

    return (
        <div className={classes.masonry}>
            {children}
        </div>
    );
}

export default Masonry;