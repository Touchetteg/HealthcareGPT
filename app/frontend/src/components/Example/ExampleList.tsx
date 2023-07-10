import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What treatment options are there for someone with stage three lung cancer?",
        value: "What treatment options are there for someone with stage three lung cancer?"
    },
    { text: "Generate a pie chart showing the frequency of medications paid for by medicaid during the month of May at Syneos Health.", value: "Generate a pie chart showing the frequency of medications paid for by medicaid during the month of May at Syneos Health." },
    { text: "How many Syneos Health transactions during the month of May had no federal insurance? Make a frequency bar graph showing the non federal vs other transaction type for each day of the month of May.", value: "How many Syneos Health transactions during the month of May had no federal insurance? Make a frequency bar graph showing the non federal vs other transaction type for each day of the month of May." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
