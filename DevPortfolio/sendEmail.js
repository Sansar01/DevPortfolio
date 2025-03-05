function sendEmail() {

    let email = document.getElementsByName('email')[0].value;

    let subject = document.getElementsByName('subject')[0].value;

    let messages = document.getElementsByName('messages')[0].value;

    Email.send({
        Host : "smtp.mailendo.com",
        Username : "sansartiwari47@gmail.com    ",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

      
    }