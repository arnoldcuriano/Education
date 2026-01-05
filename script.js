let count = 0;
let elCount = document.getElementById("count-el");

function increment() {
    count = count + 1;
    elCount.innerHTML = count;
}

function decrement() {
    count = count - 1;
    elCount.innerHTML = count;

}

function save() {
    console.log(count);
}

