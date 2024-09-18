//Login Button Event Handler
let loginBtn = document.getElementById('btn')
loginBtn.addEventListener('click', function () {

    let loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'

    let transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block'
})

// Deposite Button Event Handler
//    let depositeBtn = document.getElementById("btn-deposite");
//    depositeBtn.addEventListener('click', function () {

//        let depositeAmount = document.getElementById('deposite-amount').value;
//        let depositeNumber = parseFloat(depositeAmount);

//        let currentDeposite = document.getElementById('current-deposite').innerText
//        let currentDepositeNumber = parseFloat(currentDeposite)

//        let totalDeposite = depositeNumber + currentDepositeNumber;

//        document.getElementById('current-deposite').innerText = totalDeposite;

//        document.getElementById('deposite-amount').value = '';


//    })