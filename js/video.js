$(function () {
  // Grab the template script
  var theTemplateScript = $("#video-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "entries": [
      {
        "title": "Things to Do in Denver",
        "subtitle": "The Denver Post",
        "projectUrl": "http://dptv.denverpost.com/2015/07/02/things-to-do-in-denver-with-dave-burdick-on-july-4th-weekend/",
        "imgUrl": "things-to-do-1",
      },
      {
        "title": "The Guys in 3A",
        "subtitle": "NBC's Dot Comedy",
        "projectUrl": "https://www.youtube.com/watch?v=tgtJfIRkjkc",
        "imgUrl": "3a",
      },
      {
        "title": "Things to Do in Denver",
        "subtitle": "The Denver Post",
        "projectUrl": "http://dptv.denverpost.com/2015/07/09/things-to-do-in-denver-with-dave-burdick-2/",
        "imgUrl": "things-to-do-2",
      },
    ]
};

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
