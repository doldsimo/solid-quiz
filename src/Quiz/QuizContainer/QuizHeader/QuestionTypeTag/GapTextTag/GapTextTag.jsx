import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { RiEditorSpace } from 'solid-icons/ri'

const GapTextTag = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={RiEditorSpace} />
            <TagLabel>Gap Text</TagLabel>
        </Tag>
    )
}

export default GapTextTag