$(function () {
  // Grab the template script
  var theTemplateScript = $("#project-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "entries": [
      {
        "title": "Weekend Generator",
        "subtitle": "HTML, CSS, JS, tabletop.js",
        "imgUrl": "weekend-generator.gif",
        "projectUrl": "http://extras.denverpost.com/app/weekendgenerator",
        "problem": "The Denver Post had old content that wasn't getting surfaced.",
        "solution": "Using tabletop.js, I created a widget that would call a random dining review and a random travel story culled from two easily-updated Google spreadsheets."
      },
     {
        "title": "Weather bug",
        "subtitle": "HTML, CSS, JS, wunderground API",
        "imgUrl": "wxbug.jpg",
        "projectUrl": "http://arapahoenews.com",
        "problem": "Arapahoe Community College's news site wanted a very simple weather widget.",
        "solution": "I used the Weather Underground API to create the widget."
      }
    ]
};

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
