
function empezar(){
        if (Modernizr.video) {
                alert("lo permite");
                if (Modernizr.video.webm) {
                        alert('tambien permite el tipo de video webm');
                        var video = document.getElementById("video");
                        video.innerHTML = "<video width='123' height='123' controls ><source src='http://video.webmfiles.org/big-buck-bunny_trailer.webm' type='video/webm codecs='vp8, vorbis'></video>";
                        
                        
                        
                        
                        
                        /*<video width="123" height="123" controls >
                                <source src="http://video.webmfiles.org/big-buck-bunny_trailer.webm" type='video/webm; codecs="vp8, vorbis"'>
                        </video>*/
                }
        } else {
                alert("no lo permite");
        }
}
