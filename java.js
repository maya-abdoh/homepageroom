let rock1 =document.querySelector('.click1');
    let rock2 =document.querySelector('.click2');
    let imgg =document.querySelector('#coverImg');
    let titel =document.querySelector('#Title');
    let text =document.querySelector('#Text');
    let i= 0;
let arrs=[
  "top.jpg","desktop-image-hero-2.jpg","desktop-image-hero-3.jpg","PIC1.png","PIC2.png"
]
 let arrt=[
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
  "sofas",
  "ayaaaa"
 ]
 let arrp=[
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
"Sofas are used in homes, usually in the living room or majlis, as well as in hotels, commercial offices, waiting halls, and the environment. It is mentioned that the origin refers to the noun of the origin in the word adjective.",
"mayaaaaa"
 ]

 rock1.addEventListener('click',tt);
 rock2.addEventListener('click',swap);
    function swap(){
      i++;
      if((i==arrs.length)||(i>=arrs.length))i=0;
        imgg.src=arrs[i];
        titel.textContent=arrt[i];
        text.textContent=arrp[i];
}
function tt(){
        i--;
        if(i<0)i=arrs.length-1;
       imgg.src=arrs[i];
        titel.textContent=arrt[i];
        text.textContent=arrp[i];
}
  //menu
    function OpenSlideMenu(){
        document.getElementById('side-menu').style.width='250px';
        document.getElementById('main').style.marginLeft='250px';            
    }
    function CloseSlideMenu(){
        document.getElementById('side-menu').style.width='0';
        document.getElementById('main').style.marginLeft='0';
    }

