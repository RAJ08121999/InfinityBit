import readline from 'readline';
import questions from '../questions.json';

interface Question {
    ques: string;
    options: (string | number)[];
    correctAns: string | number;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

export async function runQuiz() {
    let score = 0;

    for (const [index, q] of (questions as Question[]).entries()) {
        console.log(`\nQ${index + 1}: ${q.ques}`);
        q.options.forEach((opt, i) => {
            console.log(`${i + 1}. ${opt}`);
        });

        const answer = await askQuestion('Choose an option (1-4): ');

        const selectedIndex = parseInt(answer.trim()) - 1;
        const selectedOption = q.options[selectedIndex];

        if (selectedOption === q.correctAns) {
            console.log('✅ Correct!');
            score++;
        } else {
            console.log(`❌ Wrong! Correct answer: ${q.correctAns}`);
        }

        console.log('-----------------------------');
    }

    console.log(`\n🎉 Quiz Over! You scored ${score}/${questions.length}`);
    rl.close();
}
