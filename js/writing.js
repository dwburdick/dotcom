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
        "title": "I am a big jerk",
        "subtitle": "for wasting this credit card scammer's time",
        "source": "The Denver Post",
        "projectUrl": "http://blogs.denverpost.com/personalinterest/2014/11/12/credit-card-scammer-angry-with-would-be-victim/2865/",
        "text": "He informed me that he was calling from Microsoft, and that there was reason to believe that my computer had recently been compromised by the internet hackers."
      },
      {
        "title": "\"May I speak to Santa?\"",
        "subtitle": "Here's how fast your information is sold when you fill out a sketchy form",
        "source": "The Denver Post",
        "projectUrl": "http://blogs.denverpost.com/personalinterest/2013/11/14/looking-for-a-job-because-heres-something-else/2321/",
        "text": "Oh, how nice! After that vaguely job-related tweet, I got this spam reply. Let's have a look down this rabbit hole."
      },
      {
        "title": "Haha, a pig!",
        "subtitle": "A guy in my neighborhood has one of those artisanal pet pigs",
        "source": "Interesting disclosures within",
        "projectUrl": "http://tinyletter.com/daveburdick/letters/interesting-disclosures-2-a-guy-in-my-neighborhood-has-one-of-those-artisanal-pet-pigs",
        "text": "I first saw it in late summer, almost six months ago now. It's maybe three quarters of a foot tall at the shoulder and pot-bellied, with stubby little legs."
      },
      {
        "title": "Revised office wearable tech policy",
        "subtitle": "from Dave in HR",
        "source": "Interesting disclosures within",
        "projectUrl": "http://tinyletter.com/daveburdick/letters/interesting-disclosures-3-a-revised-office-wearable-technology-policy-from-dave-in-hr",
        "text": "The times, they are a-changin’, and so is our dress code, in particular the rules pertaining to wearable technology. The full policy can always be accessed on our intranet site, but here are the highlights."
      },
      {
        "title": "Fun with the denomination effect",
        "subtitle": "What's round, has Washington's face, and is worth 26 cents?",
        "source": "The Denver Post",
        "projectUrl": "http://blogs.denverpost.com/personalinterest/2013/03/18/denomination-effect/",
        "text": "Professor Tracy Mott has been teaching economics at the University of Denver since 1991. I called him one afternoon last week to ask him one question: Could I sell him a quarter for 26 cents?"
      },
      {
        "title": "All look, no leap",
        "subtitle": "Millennials could pay for caution",
        "source": "The Denver Post",
        "projectUrl": "http://www.denverpost.com/smart/ci_25778903/all-look-no-leap-millennials-cautious-financial-decisions-cost-them",
        "text": "Millennials aren't buying in. The youngest millennials, at least by some definitions, are graduating from high school this month, and most of those will go to college later this year. The way they approach finance, not to mention the financial realities they're faced with, can be pretty foreign to older generations."
      },
  ]
};

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
