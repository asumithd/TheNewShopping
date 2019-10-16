let sidebarlinks = document.getElementsByClassName("sidebar_link");


function getCurrentPage(){
  alert('test');
}
sidebarlinks.forEach(el => el.addEventListener('onclick', getCurrentPage));
