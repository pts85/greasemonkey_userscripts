// ==UserScript==
// @name     Show biggest image
// @version  1
// @grant    none
// @include  *
// ==/UserScript==

//alert("Show biggest image");


var scan_button=document.createElement("input");
scan_button.type="button";
scan_button.value="-Scan biggest image-";
scan_button.title="scan";
scan_button.onclick=scan_for_biggest_image;
scan_button.setAttribute("style","position:fixed;z-index:999990;top:0px;left:50%;right:50%;color:red;font:12px system;background-color:white;border:3px outset red;outline:none;border-radius:12px;padding:1px 2px;width:120px;height:23px");
document.body.appendChild(scan_button);

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
		//alert (biggest_url);
		
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

	function hide_the_scan_button() {
    scan_button.setAttribute("style","display:hidden");
    hidescan_button.setAttribute("style","display:hidden");
	}
