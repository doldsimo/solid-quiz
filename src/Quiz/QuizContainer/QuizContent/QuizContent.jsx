import { Container } from "@hope-ui/solid"
import ProgressBar from "../ProgressBar/ProgressBar"

import QuizHeader from "../QuizHeader/QuizHeader"
import QuizQuestion from "../QuizQuestion/QuizQuestion"
import QuizFooter from "../QuizFooter/QuizFooter"
import { useQuizData } from "../../../context/quizState"


const QuizContent = () => {
    const { showProgressBar } = useQuizData();
    return (
        <>
            {showProgressBar() && <ProgressBar />}
            <Container maxW="$xl">
                <QuizHeader />
                <QuizQuestion />
                <QuizFooter />
            </Container>
        </>
    )
}


export default QuizContent