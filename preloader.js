 function preloader(images, cb){
    
    //利用好并行加载
    i = 0;
    var onComplete = function(e){
    	i++;
    	if(i == images.length){
    		cb && cb();
    	}
    }
    for(j in images) {
    	var img = new Image();
    	img.onload = img.onerror = onComplete;
    	img.src = images[j];
    }
}

var onImgLoaded = function(){
    $(".loading").addClass("hide");
}

//对几张较大图进行预加载
preloader(["img/big-img-1.png","img/big-img-2.png","img/big-img-3.png","img/big-img-4.png"], onImgLoaded);