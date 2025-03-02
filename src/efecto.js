const wrapper = document.querySelector('#wrapper');
const ticket = document.querySelector('#ticket');
console.log(ticket, wrapper);
const { width, height } = wrapper.getBoundingClientRect();

const halfWidth = width / 2;
const halfHeight = height / 2;

wrapper.addEventListener('mousemove',event=>{
    const { offSetX, offSetY} = event

    const rotationX= ((offSetX - halfWidth)/ halfWidth)*10
    const rotationY= ((offSetY - halfHeight)/ halfHeight)*10
    ticket.style.transform=`rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    wrapper.style.perspective=`1000px`;
});