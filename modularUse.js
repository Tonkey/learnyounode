var myModule = require('./modular.js');

myModule(process.argv[2],process.argv[3], function(err,data){
    if(err!=null){
        console.log(err);
    }else{
        data.forEach(function(file){
            console.log(file);

        })
    }

});
