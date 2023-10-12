function slideshow() {
  var slideshow=document.getElementById("slideshow"),
  imgs=slideshow.getElementsByTagName("img"), //get images
  pages=slideshow.getElementsByTagName("span"), //get pages
  descrips=slideshow.getElementsByTagName("p"), //get description
  current=0; //Currently active picture number

  function slideOff() {
    imgs[current].className=""; //Picture fades out
    pages[current].className="";
    descrips[current].className="";
  }
  function slideOn() {
    imgs[current].className="active"; //Picture fades out
    pages[current].className="active";
    descrips[current].className="active";
  }

  function changeSlide() { //Function to switch pictures
    slideOff();
    current++; //add 1
    if(current>=3) current=0;
    slideOn();
  }

  //Call the changeSlide function every 2 seconds for image carousel
  var slideon=setInterval(changeSlide,2000);

  slideshow.onmouseover=function () {
    clearInterval(slideon); 
  }
  slideshow.onmouseout=function () {
    slideon=setInterval(changeSlide,2000); 
  }

  for(var i=0; i<pages.length; i++) { 
    pages[i].onmouseover=function(){
      slideOff(); 
      current=this.innerHTML-1; 
      slideOn(); 
    }
  }

}

slideshow();