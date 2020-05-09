
var total_score=[0,0], initial_score, round_score=0,current=0, gameplay=true, round_score_list = {},win_score;

document.getElementById("btn-win").addEventListener('click',function(){
    win_score = document.getElementById("win-score").value
    document.querySelector(".new_wrapper").style.display = 'none'
})

function init(){
    document.querySelector('#current-0').textContent = '0'
    document.querySelector('#current-1').textContent = '0'
    document.querySelector('#score-0').textContent = '0'
    document.querySelector('#score-1').textContent = '0'
    document.querySelector('.dice').style.display = 'none';
}

init()

function update(){
    round_score=0
    document.querySelector('#current-'+current).textContent = round_score
    if(current==0){
        current=1
    }
    else{
        current=0
    }
    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplay){
        initial_score = Math.floor(Math.random()*6)+1

        document.querySelector('.dice').style.display = 'block'
        document.querySelector('.dice').src='dice-'+ initial_score + '.png'

        if(initial_score!=1){
            round_score+=initial_score
            document.querySelector('#current-'+current).textContent = round_score
        }else{
            update()
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplay){
        total_score[current] += round_score

        document.getElementById("score-"+current).textContent=total_score[current]

        if(total_score[current] >= win_score){
            document.querySelector("#name-"+current).innerHTML = 'Winner!'
            document.querySelector("#name-"+current).classList.add('winner')
            gameplay =false
        }

        update()
    }

})

document.querySelector('.btn-new').addEventListener('click',function(){
    init()
    document.querySelector('.new_wrapper').style.display = 'block'
})
