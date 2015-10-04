Handlebars.registerHelper('grouped_each', function(every, context, options) {
    var out = "", subcontext = [], i;
    if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
    }
    return out;
});

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
        "problem": "The Denver Post had old content that still had value but wasn't getting surfaced.",
        "solution": "Using tabletop.js, I created a widget that would call a random dining review and a random travel story culled from two easily-updated Google spreadsheets."
      },
     {
        "title": "This site",
        "subtitle": "HTML, CSS, JS, Bootstrap, Handlebars",
        "imgUrl": "dave.jpg",
        "projectUrl": "http://daveburdick.com",
        "problem": "I needed a site that reflected my growing skillset and weird hodgepodge of interests, and that also gave me the opportunity to try different frameworks.",
        "solution": "Here we are! Ever under construction..."
      },
     {
        "title": "Weather bug",
        "subtitle": "HTML, CSS, JS, wunderground API",
        "imgUrl": "wxbug.jpg",
        "projectUrl": "http://arapahoenews.com",
        "problem": "Arapahoe Community College's news site wanted a very simple weather widget.",
        "solution": "I used the Weather Underground API to create the widget."
      },
    ]
};

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
