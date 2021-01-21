var moment = require('moment');

exports.salamAuto= function(){
    var time = moment().format('HH');
    if(time < 12){
        return "Selamat pagi";
    }else if(time >12 && time <15){
        return "Selamat Siang";
    }else{
        return "siap bang";
    }
}