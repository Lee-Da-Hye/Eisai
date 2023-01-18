window.addEventListener("load", function() {
	var aElMountainTouristItems = document.querySelectorAll(".mountain-tourist-items > div");
	var aElMountainTouristDetailVideo = document.querySelectorAll(".mountain-tourist-details > video");
	
	var isOpened = false;
	aElMountainTouristItems.forEach(function(elItem) {
		elItem.onclick = function(e) {
			//console.log("click", e.target.className);//이벤트 발생하는 지 확인.
			
			isOpened = !isOpened;//클릭할 때마다 isopened를 부정.
			
			var idx = Array.from(aElMountainTouristItems).indexOf(e.currentTarget);
			
	    	e.currentTarget.parentElement.classList.toggle("mountain-items-toggle");
	    	
	    	
	    	if(!isOpened) {
				aElMountainTouristDetailVideo.forEach(function(elVideo, index) {
					elVideo.style.display = "none";
					elVideo.pause();//모든 비디오들을 일시 정지.
				});//isopened가 false라면 모든 영상들이 멈춰야함. 
	    		
	    	} else {
				aElMountainTouristDetailVideo[idx].style.display = "block";
				aElMountainTouristDetailVideo[idx].currentTime = 0;
				/*currentTime: 현재 미디어의 재생 시간을 초 단위로 나타나는 배정밀도 부등 소숫점 값으로
				 조회하거나 설정한다. 영상이 처음부터 다시 시작하고 싶을 때 사용.*/
	    		aElMountainTouristDetailVideo[idx].play();//재생
	    	}
	    };
	  });

	  var elaudio = document.querySelector("#audio");
	  var elpausebtn = document.querySelector("#pause");
	  var pause = true;
	  
		  elpausebtn.onclick = function(e) {
		    if (elaudio.paused) {
		      e.target.textContent = "pause_circle";
		      e.target.style.color = "#c6f1e7";
		      e.target.style.fontSize = "70px";
		      elaudio.play();
			  elaudio.volume = 0.3;
		    } else {
		      elaudio.pause();
		      e.target.textContent = "play_circle";
		      e.target.style.color =  "#11Cbd7";
		      e.target.style.fontSize = "70px";
		    }
		
		  };
		  
		  if (elaudio.paused) {
			elpausebtn.textContent = "play_circle";
			elpausebtn.style.color = "#11Cbd7";
			e.target.style.fontSize = "70px";
		  } else {
			elpausebtn.textContent = "pause_circle";
			elpausebtn.style.color = "#11Cbd7";
		    e.target.style.fontSize = "70px";
		  } 





});
