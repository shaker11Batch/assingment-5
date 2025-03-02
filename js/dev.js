// alert('amr sonir bangla')
const allCompletedBtn =document.querySelectorAll(".completed-btn")
// console.log(allCompletedBtn)
for(const handleCompletedBtn of allCompletedBtn){
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
    })
}