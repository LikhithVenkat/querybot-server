function onSubmit(e) {
    e.preventDefault()
    const prompt = document.querySelector('#prompt')
    if(prompt.value === '') {
        prompt.placeholder = "Question Please!"
    } else {
        GetAns(prompt.value)
    }
}

async function GetAns(question) {
    try {
        const test = JSON.stringify({
            prompt: question
        })
        const response = await fetch('/openai/AnswerWithAPinchOfSalt', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: test,
        })
        if(!response.ok) {
            throw new Error('Error')
        }
        const answer = await response.json();
        const content = document.querySelector('#final');
        content.innerHTML = answer.data;
    } catch(error) {
        console.log(error)
    }
}

document.querySelector('#content').addEventListener('submit', onSubmit);
