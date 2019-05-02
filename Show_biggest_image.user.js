// ==UserScript==
// @name     Show biggest image
// @version  1
// @grant    none
// @include  *
// ==/UserScript==

// This script shows biggest image and/or background image of the page
// You can use FF "Display inline" addon or similar to view images in browser (if you encounter content type problems)


//alert("Show biggest image");


var scan_button=document.createElement("input");
scan_button.type="button";
scan_button.value="-Scan biggest image-";
scan_button.title="scan";
scan_button.onclick=scan_for_biggest_image;
scan_button.setAttribute("style","position:fixed;z-index:999990;top:0px;left:50%;right:50%;color:red;font:12px system;background-color:white;border:3px outset red;outline:none;border-radius:12px;padding:1px 2px;width:120px;height:23px");
document.body.appendChild(scan_button);

var scanbg_button=document.createElement("input");
scanbg_button.type="button";
scanbg_button.value="-Scan/view bg image-";
scan_button.title="scan";
scanbg_button.onclick=scan_for_bg_image;
scanbg_button.setAttribute("style","position:fixed;z-index:999990;top:23px;left:50%;right:50%;color:red;font:12px system;background-color:white;border:3px outset red;outline:none;border-radius:12px;padding:1px 2px;width:120px;height:23px");
document.body.appendChild(scanbg_button);

var hidescan_button=document.createElement("input");
hidescan_button.type="button";
hidescan_button.value="X";
hidescan_button.title="hide";
hidescan_button.onclick=hide_the_scan_button;
hidescan_button.setAttribute("style","position:fixed;z-index:999991;top:0px;left:49%;right:51%;color:red;font:8px system;background-color:white;border:1px solid red;outline:none;border-radius:6px;padding:1px 8px;width:25px;height:15px");
document.body.appendChild(hidescan_button);

window.onscroll = scrollin;


	function scrollin(){
	  document.getElementById("scan_button").style.display = "block";
	}

	function hide_the_scan_button() {
    scan_button.setAttribute("style","display:hidden");
    scanbg_button.setAttribute("style","display:hidden");
    hidescan_button.setAttribute("style","display:hidden");
	}

// IMAGES:
	function scan_for_biggest_image() {
		var images = document.getElementsByTagName('img');
		
		//alert(images.length);
		
		var i=0;
		var size=0;
		var biggest_size=0;
		var biggest_i=0;
		
		for (i=0; i<images.length; i++) {
		  var iw=images[i].naturalWidth;
		  var ih=images[i].naturalHeight;
		  size=iw+ih;
      //alert(size);
		  if (size > biggest_size) {
		    biggest_size=size;
		    biggest_i=i;
	  	}
		}
		
		var biggest_url=document.getElementsByTagName('img')[biggest_i].getAttribute('src');
		//alert(biggest_url);
		
		var biggest_button=document.createElement("input");
		biggest_button.type="button";
		biggest_button.value="-Show biggest image-";
		biggest_button.title=biggest_url;
		biggest_button.onclick=Showing;
		biggest_button.setAttribute("style","position:fixed;z-index:999992;top:0px;left:50%;right:50%;color:red;font:12px system;background-color:white;border:3px outset red;outline:none;border-radius:12px;padding:1px 2px;width:120px;height:25px");
		document.body.appendChild(biggest_button);
		

		function Showing() {
		  	//alert("Showing");
				location.assign(biggest_url);
		}
	}

// BACKGROUND IMAGES:
	function scan_for_bg_image() {
      var images_bg = document.getElementsByTagName("body")[0].getAttribute("background");
    	if (images_bg == null) {
	   			images_bg = window.getComputedStyle( document.body ,null).getPropertyValue('background-image');
          var strip=[images_bg.indexOf('"')+1, images_bg.lastIndexOf('"')];
          images_bg=images_bg.substring(strip[0],strip[1]);
          //alert(images_bg);
      }
      if (images_bg == null || images_bg == '') {
        	alert("Background image not found");
      }
    	else {
					//alert(images_bg);
          location.assign(images_bg);
      }
  }
