let dragItems=document.querySelectorAll('.box')
let dropArea=document.querySelector('#drop');
let count=dragItems.length;
let allsize=document.querySelector('#allsize');
allsize.innerHTML=count;
copy.innerHTML=count;
dropArea.addEventListener('dragover',function(e){
    e.preventDefault();
})
dropArea.addEventListener('dragleave',function(e){
    e.preventDefault();
})

for(var i=0;i<dragItems.length;i++){
    dragItems[i].addEventListener('dragstart',function(e){
        e.dataTransfer.setData('rufo',this.id)
    })
}

dropArea.addEventListener('drop',function(e){
    let index=e.dataTransfer.getData('rufo');
    let dragitem=document.getElementById(index);
    dropArea.appendChild(dragitem);
    count--;
    let copy=document.querySelector('#copy');
    copy.innerHTML=count;
})









          // BACKSPACE TASK


      let btn=document.querySelector('#btn');
      let del=document.querySelector('#del');
      btn.addEventListener('click',function(){
         let inp=document.querySelector('#inp').value;
         let rmv=inp.slice(0,-1);
         console.log(rmv);
         
         del.innerHTML=rmv;
          
      })