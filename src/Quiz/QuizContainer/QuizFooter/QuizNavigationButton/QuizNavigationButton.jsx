import { Button } from "@hope-ui/solid"

const QuizNavigationButton = (props) => {
    return (
        <Button color={props.color} onclick={props.onClick} variant="subtle">{props.children}</Button>
    )
}

export default QuizNavigationButton