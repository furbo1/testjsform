function select(event) {
    event.preventDefault()

    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    let country = document.getElementById('country').value

    const drone = document.querySelector('input[name="drone"]:checked').value

    let myObj = { fname, lname, email, pass, country, drone }
    console.log(myObj)

    let arr = []
    let newArr = arr.push(myObj)
    console.log(newArr)



}