import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { RiEditorListOrdered } from 'solid-icons/ri'

const CorrectOrderTag = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={RiEditorListOrdered} />
            <TagLabel>Correct Order</TagLabel>
        </Tag>
    )
}

export default CorrectOrderTag;