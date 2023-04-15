import { Progress, ProgressIndicator, ProgressLabel } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";

const ProgressBar = () => {
  const { questionsSum, currentPage } = useQuizData();
  return (
    <>
      <Progress size="lg" height="1em" value={ questionsSum() / currentPage() === 0 ? 1 : currentPage()} max={questionsSum()} >
        <ProgressIndicator />
        {/* <ProgressLabel /> */}
      </Progress>
    </>
  )
}

export default ProgressBar