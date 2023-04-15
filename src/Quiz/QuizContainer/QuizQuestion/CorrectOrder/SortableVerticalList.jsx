import { useDragDropContext } from "@thisbeyond/solid-dnd";
import {
    DragDropProvider,
    DragDropSensors,
    DragOverlay,
    SortableProvider,
    createSortable,
    closestCenter,
} from "@thisbeyond/solid-dnd";
import { Box, Center, Text } from "@hope-ui/solid";
import { createSignal, For } from "solid-js";
import { TbHandGrab } from 'solid-icons/tb'
import styles from "./SortableVerticalList.module.css";


const Sortable = (props) => {
    const sortable = createSortable(props.item);
    const [state] = useDragDropContext();
    return (
        <div
            use:sortable
            class={styles.itemContainer}
        >
            <TbHandGrab class={styles.icon} />
            <Center>
                <Text>{props.item}</Text>
            </Center>
        </div>
    );
};

const SortableVerticalList = (props) => {
    const [activeItem, setActiveItem] = createSignal(null);
    const ids = () => props.items;

    const onDragStart = ({ draggable }) => setActiveItem(draggable.id);

    const onDragEnd = ({ draggable, droppable }) => {
        if (draggable && droppable) {
            const currentItems = ids();
            const fromIndex = currentItems.indexOf(draggable.id);
            const toIndex = currentItems.indexOf(droppable.id);
            if (fromIndex !== toIndex) {
                const updatedItems = currentItems.slice();
                updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
                // Setting user Answer inside of the state after every dnd change
                props.setItems(updatedItems);
            }
        }
    };

    return (
        <DragDropProvider
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            collisionDetector={closestCenter}
        >
            <DragDropSensors />
            <div>
                <SortableProvider ids={ids()}>
                    <For each={props.items}>{(item) => <Sortable item={item} />}</For>
                </SortableProvider>
            </div>
            <DragOverlay>
                <Box class={styles.itemContainerGrabbed} w="100%" p="$4" borderRadius="$md" onClick={() => setAnswer(i)} style={{ display: "flex" }}>
                    <Center>
                        <TbHandGrab class={styles.icon} />
                        <Text>{activeItem()}</Text>
                    </Center>
                </Box>
            </DragOverlay>
        </DragDropProvider>
    );
};

export default SortableVerticalList;