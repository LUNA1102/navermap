var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(35.945185, 126.682834),
    zoom: 10
});

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.945185, 126.682834),
    map: map
});