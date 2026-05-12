
// ---------------- CARD ACTIVE EFFECT ----------------

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("click",()=>{

        cards.forEach((c)=>{
            c.style.border = "none";
        });

        card.style.border = "2px solid #1DB954";

    });

});

// ---------------- PLAY BUTTON ----------------

const playButton = document.querySelector(".player-control-icon:nth-child(3)");

let isPlaying = false;

if(playButton){

    playButton.addEventListener("click",()=>{

        if(!isPlaying){

            playButton.style.transform = "scale(1.2)";
            playButton.style.opacity = "1";

            isPlaying = true;

        }
        else{

            playButton.style.transform = "scale(1)";
            playButton.style.opacity = "0.7";

            isPlaying = false;
        }

    });

}

// ---------------- BUTTON EFFECTS ----------------

const buttons = document.querySelectorAll(".badge");

buttons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        btn.style.transform = "scale(0.95)";

        setTimeout(()=>{

            btn.style.transform = "scale(1)";

        },150);

    });

});

// ---------------- ICON EFFECT ----------------

const icons = document.querySelectorAll(".icons i");

icons.forEach((icon)=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.color = "#1DB954";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.color = "white";

    });

});

// ---------------- PROGRESS BAR ----------------

const progressBar = document.querySelector(".progres-bar");

if(progressBar){

    progressBar.addEventListener("input",()=>{

        console.log(progressBar.value);

    });

}

// ---------------- LOGIN MODAL ----------------

const signBtn = document.querySelector(".sign-btn");

const loginModal = document.querySelector(".login-modal");

const closeModal = document.querySelector(".close-modal");

const loginBtn = document.querySelector("#login-btn");

// OPEN MODAL

if(signBtn){

    signBtn.addEventListener("click",()=>{

        loginModal.style.display = "flex";

    });

}

// CLOSE MODAL

if(closeModal){

    closeModal.addEventListener("click",()=>{

        loginModal.style.display = "none";

    });

}

// LOGIN FUNCTION

if(loginBtn){

    loginBtn.addEventListener("click",()=>{

        const email = document.querySelector("#email").value;

        const password = document.querySelector("#password").value;

        if(email === "" || password === ""){

            alert("Please fill all fields");

        }
        else{

            alert("Login Successful 🎵");

            signBtn.innerText = "😊";

            loginModal.style.display = "none";

        }

    });

}

