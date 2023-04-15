import { Tag, TagLabel, TagLeftIcon } from "@hope-ui/solid";
import { OcDotfill3 } from 'solid-icons/oc'

const SingleChoiceTag = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={OcDotfill3} />
            <TagLabel>Single Choice</TagLabel>
        </Tag>
    )
}

export default SingleChoiceTag;