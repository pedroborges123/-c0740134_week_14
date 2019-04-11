jQuery(document).ready(function () {
   

    jQuery.ajax({
        type: 'GET',
        dataType: "json",
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=Vitoria,BR&appid=4eb3f15b80d496177a959a5b9958fdaa',
        //url: 'https://maps.owm.io/map/clouds_new/18/-20.253071/-40.266828?appid=4eb3f15b80d496177a959a5b9958fdaa',
        data: {
            lat: '-20.253071',
            lon: '-40.266828',
            APPID: "b1b15e88fa797225412429c1c50c122a1",
            units: 'metric'
        },
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    })
});

