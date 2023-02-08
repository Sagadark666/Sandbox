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

const survey = new Survey.Model(window.localStorage.getItem("survey-json"));

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});


survey.onComplete.add(function (sender, options) {
  // Display the "Saving..." message (pass a string value to display a custom message)
  console.log(sender.data);
  options.showDataSaving();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "your/server/url");
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.onload = xhr.onerror = function () {
    if (xhr.status == 200) {
      // Display the "Success" message (pass a string value to display a custom message)
      options.showDataSavingSuccess();
      // Alternatively, you can clear all messages:
      // options.showDataSavingClear();
    } else {
      // Display the "Error" message (pass a string value to display a custom message)
      options.showDataSavingError();
    }
  };
  xhr.send(JSON.stringify(sender.data));
});