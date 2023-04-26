
import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { OcNumber2 } from 'solid-icons/oc'

const NumberInputTag = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={OcNumber2} />
            <TagLabel>Number Input</TagLabel>
        </Tag>
    )
}

export default NumberInputTag