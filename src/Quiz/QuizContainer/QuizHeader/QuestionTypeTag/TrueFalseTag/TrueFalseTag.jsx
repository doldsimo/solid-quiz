import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { AiOutlineCheck } from 'solid-icons/ai'

const TrueFalseTag = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={AiOutlineCheck} />
            <TagLabel>True/False Question</TagLabel>
        </Tag>
    )
}

export default TrueFalseTag;