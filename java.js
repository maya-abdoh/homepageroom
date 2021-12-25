let btn12 =document.getElementsByClassName('btn1');
let btn2 =document.getElementById('mm');
let image1=document.getElementById('coverImg');
let image12=document.getElementById('ss');
let image123=document.getElementById('cc');
let text=document.getElementById('text');
let te=document.getElementsByClassName('tex');
btn12.addEventListener('click', () =>  {
image1.src='PIC2.png';
} ) 
btn12.addEventListener('click', () =>  {
    image12.src='PIC1.png';
} ) 
btn12.addEventListener('click', () =>  {
    image123.src='PIC3.png';
} ) 
btn12.addEventListener('click', () =>  {
  text.textContent="maya abdohhhh";
} ) 
  btn12.addEventListener('click', () =>  {
    te.textContent="maya kkkkkabdohhhh";
  } ) 

  //menu
    function OpenSlideMenu(){
        document.getElementById('side-menu').style.width='250px';
        document.getElementById('main').style.marginLeft='250px';            
    }
    function CloseSlideMenu(){
        document.getElementById('side-menu').style.width='0';
        document.getElementById('main').style.marginLeft='0';
    }

