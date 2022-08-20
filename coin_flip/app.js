const btn = document.querySelector('button');
const heads = document.querySelector('#heads'); //.id:0
const tails = document.querySelector('#tails'); //. id:1
const side = document.querySelector('#side')
let flag = 0;
let currentCoin = null;

const showHeads = () => {
    side.textContent = '';
    heads.classList.remove('hidden');
    heads.classList.add('new-coin');
    setTimeout(() => {
        side.textContent = 'heads';
    }, 2000);
    setTimeout(() => {
        heads.classList.remove('new-coin')
    }, 3000);
}

const showTails = () => {
    side.textContent = '';
    tails.classList.remove('hidden');
    tails.classList.add('new-coin');
    setTimeout(() => {
        side.textContent = 'tails';
    }, 2000);
    setTimeout(() => {
        tails.classList.remove('new-coin')
    }, 3000);
}

const firstFlip = () => {
    let result = Math.round(Math.random());
    if(result === 0){
        showHeads();
        currentCoin = 0;
    } else {
       showTails();
       currentCoin = 1;
    }
};

const showNewCoin = () => {
    let nextCoin = Math.round(Math.random());
       
    setTimeout(() =>{
    if(nextCoin === 0){
            showHeads()
        } else {
            showTails()
        }
    }, 1500);

    currentCoin = nextCoin
    console.log(nextCoin, currentCoin);
}

const nthFlip = () =>{
    if(currentCoin === 0){
        heads.classList.add('falling');
        setTimeout(() => {
            heads.classList.add('hidden');
            heads.classList.remove('falling');
        }, 1500);
    } else {
        tails.classList.add('falling')
        setTimeout(() => {
            tails.classList.add('hidden');
            tails.classList.remove('falling')
        }, 1500);
    }

    showNewCoin();

}




btn.addEventListener('click', () =>{
    if(flag === 0){
        firstFlip();
        flag++
    } else {
        nthFlip();
    }
});