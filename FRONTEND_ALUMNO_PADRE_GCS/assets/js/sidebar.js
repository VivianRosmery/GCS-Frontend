let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });
  
// following are the code to change sidebar button(optional)
if(sidebar.classList.contains("open")){
    document.getElementById('hogar').style.display='block';
    document.getElementById('hogar2').style.display='block';
    document.getElementById('nav-list').classList.remove('d-none');
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class

    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
        document.getElementById('hogar').style.display='none';
        document.getElementById('hogar2').style.display='none';
       document.getElementById('nav-list').classList.add('d-none');
      }
     
     