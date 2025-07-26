let counter =0;

function updatedCounter () {
    counter++;
    console.log(counter);
    setTimeout(updatedCounter,1000);
}
updatedCounter();
