import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { TbRelationOneToOne } from 'solid-icons/tb'

const RelationTag = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={TbRelationOneToOne} />
            <TagLabel>Relations</TagLabel>
        </Tag>
    )
}

export default RelationTag;