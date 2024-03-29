import { Button, Center, Container, Heading, Progress, ProgressIndicator } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";
import { Match, Switch, createSignal, onMount } from "solid-js";
import getUserResultPoints from "../../../helper/result";
import styles from './QuizResults.module.css';
import { IoArrowBackCircleSharp } from 'solid-icons/io';
import QuizResultsAccordion from "./QuizResultsAccordion/QuizResultsAccordion";


const QuizResults = () => {
    const { setCurrentPage, quiz, allUserAnswers, setInitialQuizInfo, resultType, onComplete } = useQuizData();
    const [points, setPoints] = createSignal(0);
    const [showResultInfo, setShowResultInfo] = createSignal(false);


    const cleanQuiz = () => {
        // Clear data after quiz is the same as setting initalQuiznfos and jumping back to start page
        setCurrentPage(0);
        setInitialQuizInfo(quiz());
    }

    onMount(() => {
        const points = getUserResultPoints(allUserAnswers(), quiz());
        setPoints(points);
    })

    const toggleResults = () => {
        setShowResultInfo(!showResultInfo());
    }

    const onQuizEnd = () => {
        let completeEventObject = {
            alluserAnswers: allUserAnswers(),
            points: points()
        }
        // onComplete is for hook which is executed when quiz ends, so that users of the lib can do something after quiz is over
        if (onComplete().function !== null) {
            onComplete().function(completeEventObject);
        }

        cleanQuiz();
    }


    return (
        <Container maxW="$xl">
            <Switch fallback={<p>{x()} is between 5 and 10</p>}>
                <Match when={resultType() === "none"}>
                    <Center>
                        <Button class={styles.backButton} onClick={() => cleanQuiz()} variant="outline" leftIcon={<IoArrowBackCircleSharp />}>End Quiz</Button>
                    </Center>
                </Match>
                <Match when={resultType() === "points"}>
                    <Center>
                        <Heading level={1} size="xl">
                            Results
                        </Heading>
                    </Center>
                    <br />
                    <Progress size="lg" value={points().resultSum} max={points().maxSum} rounded={true}>
                        <ProgressIndicator color="$success9" />
                    </Progress>
                    <Center>
                        <p>
                            You have achieved <b class={styles.achivedPoints}>{points().resultSum}</b> out of <b class={styles.allPoints}>{points().maxSum}</b> points.
                        </p>
                    </Center>
                    <br />
                    <Center>
                        <Button class={styles.backButton} onClick={() => cleanQuiz()} variant="outline" leftIcon={<IoArrowBackCircleSharp />}>End Quiz</Button>
                    </Center>
                </Match>
                <Match when={resultType() === "feedback"}>
                    <Center>
                        <Heading level={1} size="xl">
                            Results
                        </Heading>
                    </Center>
                    <br />
                    <Progress size="lg" value={points().resultSum} max={points().maxSum} rounded={true}>
                        <ProgressIndicator color="$success9" />
                    </Progress>
                    <Center>
                        <p>
                            You have achieved <b class={styles.achivedPoints}>{points().resultSum}</b> out of <b class={styles.allPoints}>{points().maxSum}</b> points.
                        </p>
                    </Center>
                    <br />
                    <Center>
                        <Button onClick={() => toggleResults()} style={{ "margin": "auto", "background-color": "var(--hope-colors-success9)" }}>{showResultInfo() ? "Less result informations" : "More result informations"}</Button>
                    </Center>
                    <br />
                    {showResultInfo() && <QuizResultsAccordion />}
                    <Center>
                        <Button class={styles.backButton} onClick={() => onQuizEnd()} variant="outline" leftIcon={<IoArrowBackCircleSharp />}>End Quiz</Button>
                    </Center>

                </Match>
            </Switch>

        </Container>
    )
}

export default QuizResults