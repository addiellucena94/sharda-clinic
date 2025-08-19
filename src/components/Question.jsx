const Question = ({question, response}) => {

    const handleClick = () => {
        /*const response = document.getElementById('response')
        if(response.classList.contains('hidden')) {
            console.log('La tiene')
        }else{
            console.log('No la tiene')
        }*/
        console.log('clic')
    } 

    return (
        <div class="w-full">
            <button onClick={handleClick} class="w-full flex justify-between text-2xl p-3 border-b-1 border-b-solid border-b-sky-800 cursor-pointer">
                <p>
                    {question}
                </p>
                <p>
                    +
                </p>
            </button>
            <p id="response" class="hidden text-left p-3 text-xl bg-sky-50">
                {response}
            </p>
        </div>
    )
}

export default Question