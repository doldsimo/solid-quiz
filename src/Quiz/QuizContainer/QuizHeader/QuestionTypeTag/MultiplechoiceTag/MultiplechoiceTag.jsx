import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { FiMoreHorizontal } from 'solid-icons/fi'

const MultiplechoiceTag = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={FiMoreHorizontal} />
            <TagLabel>Multiple Choice</TagLabel>
        </Tag>
    )
}

export default MultiplechoiceTag