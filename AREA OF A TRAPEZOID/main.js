// Event Listener
document.getElementById('calc-btn').addEventListener('click', calcTotal)

// Event Function
function calcTotal() {
    // INPUT - Get two numbers
    let tbase = Number(document.getElementById('top-base').value);
    let bbase = Number(document.getElementById('bottom-base').value);
    let h = Number(document.getElementById('height').value);

    console.log(tbase);
    console.log(typeof(tbase));
    
    console.log(bbase);
    console.log(typeof(bbase));
    
    console.log(h);
    console.log(typeof(h));


    // PROCESS - add the two numbers
    let total =  1 / 2 + (Math.pow (bbase, 2) + Math.pow (bbase, 2) * h);

    // OUTPUT - display the total
    document.getElementById('result').innerHTML = total;
}