import { Center, Title } from "@mantine/core";
import Masonry from "./masonry";
import EventCard from "./eventCard";

export default function Events({ events }) {

    console.log("Length", events.length)
    const eventList = events.map((event, index) => {
        return (
            <EventCard event={event} key={index} />
        )
    })



    return (
        <>
            {events.length == 0
                ? <Center style={{height: 400}}><Title>Sorry! No data available</Title></Center>
                : <Masonry>{eventList}</Masonry>
            }
        </>
    );
}