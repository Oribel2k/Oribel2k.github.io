const Rsubmit = document.querySelector("#btn1")
const Rpass1 = document.querySelector("#password")
const Rpass2 = document.querySelector("#password-confirm")

Rsubmit.addEventListener('click', (event) => {
    if (Rpass1.value !== Rpass2.value) {
        event.preventDefault()
        alert("Les mots de passe ne sont pas identiques ou non valides")
        Rpass1.value =''
        Rpass2.value =''
    }
})



/* -----------------------------------------*/

const Lsubmit = document.querySelector('#btn2')
const login = document.querySelector('#login2')
const password = document.querySelector('#password2')
const message = document.querySelector(".form-container.center")

const userList = [
    {name: "prof", password: "abcd", failure: 0, unavailable: false},
    {name: "julie", password: "efgh", failure: 0, unavailable: false},
    {name: "nath", password: "ijkl", failure: 0, unavailable: false},
    {name: "jimmy", password: "mnop", failure: 0, unavailable: false},
    {name: "alex", password: "qrst", failure: 0, unavailable: false},
]

function myPass(user, login) {
    if(user.failure == 3) {
        user.unavailable = true
        return null
    }

    if(user.password == login.password) {
        return true
    } else {
        user.failure++
        return false
    }
}

function isLogIn(login) {
    let response = -1
    userList.forEach(user => {
        if(user.unavailable && user.name == login.name) {
            //aucune connexion n'est possible avec cet utilisateur pour le moment
            response = -3
        }

        if(!user.unavailable && user.name == login.name) {
            const resultMyPass = myPass(user, login)
            if(resultMyPass) {
                //connexion réussie
                response = 1
            } else if (resultMyPass == null) {
                response = -3
            } else {
                //(-2) connexion bloqué avec cet utilisateur pour le moment
                user.failure == 3 ? response = -2 : response = -4 
            }
        }
    })

    if (response == 1) {
        return "connexion réussie"

    } else {
        if (response == -1) {
            // aucun identifiant trouvé
            return "Aucun identifiant trouvé"
        } else if (response == -2) {
            return "Mot de passe incorrect ! Connexion bloqué avec cet utilisateur pour le moment"
        } else if (response == -3) {
            return "Aucune connexion n'est possible avec cet utilisateur pour le moment"
        } else if(response == -4){
            //mot de passe incorrect
            return "Mot de passe incorrect !"
        } else {
            return "Erreur non capturé"
        }
    }
    
}

function clear() {
    login.value = ""
    password.value = ""
    message.innerHTML = "MESSAGE APRES SOUMISSION"
}

function disable() {
    login.readOnly = true
    password.readOnly = true
    Lsubmit.disabled = true
}

function enable() {
    login.readOnly = false
    password.readOnly = false
    Lsubmit.disabled = false
}

Lsubmit.addEventListener('click', (event) => {
    event.preventDefault()
    const mylogin = {
        name: login.value,
        password: password.value
    }
    message.innerHTML =`${isLogIn(mylogin)}`
    disable()
    window.setTimeout(() => {
        enable()
        clear()
    }
    ,3000)  
}
)