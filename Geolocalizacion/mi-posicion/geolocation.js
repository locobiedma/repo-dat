function show_map(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var pos = new google.maps.LatLng(latitude, longitude)
    var mapholder = document.getElementById('map')
    mapholder.style.height='250px';
    mapholder.style.width='500px';
    var options={
        center:pos,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
    var map=new google.maps.Map(document.getElementById("map"), options);
    console.log("hola");
    var marker=new google.maps.Marker({position:pos,map:map,title:"You are here!"});
    console.log("adios");
}

function get_position() {
    if (Modernizr.geolocation) {
        console.log("entro en el if");
        navigator.geolocation.getCurrentPosition(show_map);
    } else {
        // no native support; maybe try a fallback?
    }
}

get_position();
