// alert('amr sonir bangla')
const allCompletedBtn =document.querySelectorAll(".completed-btn")
// console.log(allCompletedBtn)
for(const handleCompletedBtn of allCompletedBtn){
    const date = new Date()
    // console.log(handleCompletedBtn)
    handleCompletedBtn.addEventListener('click', ()=>{
        // console.log('object')
        const dicriseId = parseInt(document.getElementById('dicrise').innerText)
        console.log(dicriseId)
        const newValue =Math.max(0, dicriseId -1);
        document.getElementById('dicrise').innerText= newValue;
        const incriseId = parseInt(document.getElementById('incrise').innerText)
        console.log(dicriseId)
        const newValueCount =Math.max(0, incriseId +1);
        document.getElementById('incrise').innerText= newValueCount;
        const container =document.getElementById('history-container')
        document.getElementById('history-container').style.display ='block'
        const div = document.createElement('div')
        div.classList.add('mt-5')
        
        div.innerHTML=`
        <p class="text-canter">You hove complete the task</p>
        <p class="text-canter">${date}</p>
        `
        container.appendChild(div)

    })
}

document.getElementById('history-clear').addEventListener('click',()=>{
    document.getElementById('history-container').style.display='none'
})
document.getElementById('move-page').addEventListener('click', ()=>{
    window.location.href ='question.html'
})