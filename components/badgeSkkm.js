import { Badge } from "@mantine/core";

function BadgeSkkm({ skkms, showOne }) {

    var badges;
    console.log(skkms)

    if (!showOne) {
        badges = skkms.data.map((skkm) => {
            console.log("skkm: ", skkm)

            return (
                <Badge color={'dark'} variant={'outline'}>
                    {skkm.attributes.title}
                </Badge>
            )
        })
    } else {
        const length = skkms.data.length
        var badgeText;

        badges =
            <Badge color={'dark'} variant={'outline'}>
                {skkms.data[0].attributes.title} {length > 1 ? `+${skkms.data.length - 1} MORE` : ''}
            </Badge>
    }

    return (
        <>
            {badges}
        </>
    )
}

export default BadgeSkkm;