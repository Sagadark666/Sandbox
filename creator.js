
Survey.ComponentCollection.Instance.add({
  // A unique name; must use lowercase
  name: "test",
  // A display name used in the Toolbox
  title: "Test",
  // A JSON schema for the base question type (Dropdown in this case)
  questionJSON: {
    "type": "html",
    "html": "<h3>Seleccione su ubicacion</h3> <div id=\"map\"></div>"
  }
});

Survey.ComponentCollection.Instance.add({
  // A unique name; must use lowercase
  name: "date",
  // A display name used in the Toolbox
  title: "Fecha",
  // A JSON schema for the base question type (Dropdown in this case)
  questionJSON: {
    "type": "html",
    "html": "<input type=\"date\" value=\"2023-02-06\" />"
  }
});

const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);

document.addEventListener("DOMContentLoaded", function() {
    creator.render("surveyCreator");
});

Survey.ChoicesRestfull.onBeforeSendRequest = function(sender, options) {
  options.request.setRequestHeader("Authorization", "ad0ead6e-6433-458c-8bc1-8cf3031b6bd0");
};


//creator.saveSurveyFunc = (saveNo, callback) => {
//    //  localStorage:
//    window.localStorage.setItem("survey-json", creator.text);
//    callback(saveNo, true);
//
//    // web service:
//    saveSurveyJson(
//        "https://your-web-service.com/",
//        creator.JSON,
//        saveNo,
//        callback
//    );
//};

// web service:
//function saveSurveyJson(url, json, saveNo, callback) {
//    const request = new XMLHttpRequest();
//    request.open('POST', url);
//    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//    request.addEventListener('load', () => {
//        callback(saveNo, true);
//    });
//    request.addEventListener('error', () => {
//        callback(saveNo, false);
//    });
//    request.send(JSON.stringify(json));
//}


creator.saveSurveyFunc = (saveNo, callback) => {
    // If you use localStorage:
    console.log(creator.text);
    console.log(creator.JSON);
    window.localStorage.setItem("survey-json", creator.text);
    //callback(saveNo, true);


};
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const bogota = { lat: 4.7110, lng: -74.0721};
  // The map, centered at Bogota
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: bogota,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: bogota,
    map: map,
  });
}

window.initMap = initMap


