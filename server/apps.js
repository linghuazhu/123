var fs = require("fs");

var getAll = function(){
    var apps  = JSON.parse(fs.readFileSync(__dirname+"\\app.json",'utf-8'));
    return apps;
}

var addOne = function(app){
    var apps = getAll();
    var maxId = 0;
    for(var i=0;i<apps.length;i++){
        if( apps[i]['id'] > maxId){
            maxId =  apps[i]['id'];
        }
    }
    app["id"] = maxId+1;
    apps.push(app);
    var appStr = JSON.stringify(apps);
    fs.writeFileSync(__dirname+"\\app.json",appStr,'utf-8');
}

var getOne = function(appId){
    var apps = getAll();
    for(var i=0;i<apps.length;i++){
        if(appId == apps[i]['id']){
            return apps[i];
        }
    }
    return null;
}

var saveOne = function(appId,app){
    var apps = getAll();
    app['id'] = appId;
    for(var i=0;i<apps.length;i++){
        if(appId == apps[i]['id']){
            apps[i] = app
        }
    }
    var appStr = JSON.stringify(apps);
    fs.writeFileSync(__dirname+"\\app.json",appStr,'utf-8');
}

module.exports ={
    getAll,
    getOne,
    saveOne,
    addOne
}