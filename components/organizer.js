import { Group, Avatar, Text } from "@mantine/core"
import { getImageURL } from "../libs/media";

export default function Organizer({ organizer }) {
    const { name, logo } = organizer.data.attributes
    const {alternativeText} = logo.data.attributes

    return (
        <Group>
            <Avatar
                size={30}
                src={getImageURL(logo)}
                alt={alternativeText || ""}
            />
            <Text size={'xs'} weight={'bolder'} transform={"capitalize"}>
                {name}
            </Text>
        </Group>
    );
}