var input = document.querySelector('.search_input')
var btn = document.querySelector('.search_btn')
var content = document.querySelector('.content')
var speak = document.querySelector('.speaking_btn')

function playSound() {
    speak.play()
}

async function searchWord(word) {
    let wordAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let data = await fetch(wordAPI).then(res => res.json())


    if (data.title !== 'No Definitions Found') {
        content.innerHTML = `
            <div class="content">
                <audio class="speaking_btn"></audio>
                <div class="word">
                    <h2 class="main_word">${data[0].word}</h2>
                    <button onclick="playSound()"> 
                          <i class='bx bx-volume-full' style="color:#ae9cff;"></i>
                    </button>
                </div>
                <p class="obj">${data[0].meanings[0].partOfSpeech}<span class="pronun"> ${data[0].phonetics[1].text}</span></p> 
                <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>

        </div>

    `
        speak.setAttribute("src", `${data[0].phonetics[0].audio}`)
    }
    else {
        content.innerHTML = `
        <div class="content">
           <i> Could'nt find </i>
        </div>
        `
    }

    //console.log(data.title);
    // console.log(data[0].word)
    // console.log(data[0].meanings[0].partOfSpeech)
    // console.log(data[0].phonetics[1].text)
    // console.log(data[0].meanings[0].definitions[0].definition)
    // console.log(data[0].phonetics[0].audio)
}


btn.addEventListener('click', function () {
    let ip = input.value.trim()
    searchWord(ip)
})

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        btn.click();
    }
});