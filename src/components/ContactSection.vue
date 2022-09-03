<template>
    <transition name="fade">
        <div v-if="emailSent" class="email-notice">
        <h1>Tack för ditt mail!</h1>
        <h3>Jag återkommer så fort jag kan!</h3>
        <button @click="emailSent = false" class="notice-btn">Stäng!</button>
    </div>
    </transition>
 
    <form @submit.prevent="sendEmail" class="container">
        <div class="contactmetext">
            <h1>Kontakta mig!</h1>
        </div>
        <div class="firstname">
            <input type="text" placeholder="Förnamn" title="Måste vara minst 1 bokstav långt" required="required"
                v-model="fname" name="fname">
        </div>
        <div class="lastname">
            <input type="text" placeholder="Efternamn" required="required" pattern="[a-zA-Z]{1,20}" v-model="lname"
                name="lname">
        </div>
        <div class="email">
            <input type="email" placeholder="Email" required="required" v-model="email" name="email">
        </div>
        <div class="message">
            <textarea type="message" cols="30" rows="5" placeholder="Meddelande" required="required"
                title="Meddelandet får inte vara längre än 250 bokstäver" pattern="[a-Z 1-9]{1,250}" v-model="message"
                name="message"></textarea>
        </div>
        <div class="send">
            <input ref="submitBtn" type="submit" value="Skicka">
        </div>
    </form>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name: 'ContactMe',
    data() {
        return {
            fname: '',
            lname: '',
            email: '',
            message: '',
            emailSent: false
        }
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_en6yx2f', 'template_tzn6b4j', e.target,
                    'Uf01cgMiidXGxsqS4', {
                    fname: this.fname,
                    lname: this.lname,
                    email: this.email,
                    message: this.message
                })
                this.emailSent = true;
            } catch (error) {
                console.log({ error })
                this.emailSent = false;
            }
            // Reset form field
            this.fname = ''
            this.lname = ''
            this.email = ''
            this.message = ''
        },
    }
}
</script>


<style scoped>
h1
{
    margin-top: 0;
    text-align: center;
}

*
{
    box-sizing: border-box;
}

.container
{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 30px;
    grid-template-areas:
        "contactmetext contactmetext"
        "firstname lastname"
        "email email"
        "message message"
        "send send";
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(18, 16, 140, 0.274) 0%, rgba(5, 5, 31, 0.4) 100%);
    padding: 80px;
    width: 100%;
    height: 600px;
    margin-bottom: 50px;
    margin-top: 200px;
}

input[type=text],
[type=email]
{
    width: 100%;
    height: 40px;
    padding: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    background: rgba(173, 216, 230, 0.192);
    color: white;
}

input[type=text],
textarea
{
    width: 100%;
    background: rgba(173, 216, 230, 0.247);
    resize: none;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding: 12px;
    color: white;
}

input[type=submit]
{
    background-color:rgba(173, 216, 230, 0.247);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
}

input[type=submit]:hover
{
    background-color: #45a049;
}

input:invalid
{
    border: red;
}

input::placeholder,
textarea::placeholder
{
    color: white;
    font-family: Outfit;
}

.email-notice
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10%;
    width: 60%;
    height: 50%;
    background: rgba(0, 0, 0, 0.90);
    color: white;
    font-size: 20px;
    position: absolute;
    left: 20%;
    z-index: 100;
    text-align: center;
    margin: 0;
    border-radius: 10px;
}

.notice-btn
{
    height: 10%;
    width: 15%;
    background-color:rgba(173, 216, 230, 0.575);
    border: none;
    border-radius: 15px;
}

.notice-btn:hover
{
    cursor: pointer;
    background-color: #45a049;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.contactmetext
{
    grid-area: contactmetext;
}

.firstname
{
    grid-area: firstname;
}

.lastname
{
    grid-area: lastname;
}

.email
{
    grid-area: email;
}

.message
{
    grid-area: message;
}

.send
{
    grid-area: send;
}

h1
{
    font-weight: normal;
}
</style>