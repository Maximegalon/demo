angular.module('templates', ['estimate.html', 'expand.html', 'graph.html', 'invite.html', 'read.html']);

angular.module("estimate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("estimate.html",
    "<div class=\"row\">\n" +
    "    <div class=\"well span12\">\n" +
    "        <h3>HR Interactive Resource Estimator for Monetary Equations</h3>\n" +
    "        <label>Notice: This does not create or modify an employee.  Please use this tool only to estimate amounts for individuals.</label>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<br />\n" +
    "<br />\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"span4\">\n" +
    "        <div class=\"well\">\n" +
    "            <!-- NOTE: If there is 0, 1, 2 or more employee, you can use an I18N template to make the language sound correct for the singluar vs. plural wording.  read: employee(s) -->\n" +
    "            You have {{employees.length}} employee(s) with a total estimated total cost of {{ totalCost | currency}} per pay period.\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"well\">\n" +
    "            <span ng-if=\"employees.length == 0\">No employee information to show</span>\n" +
    "            <ul>\n" +
    "                <!-- NOTE: Something like below would be a real grid control, wrapped in a custom directive probably -->\n" +
    "                <!-- NOTE: If there is 0, 1, 2 or more dependants, you can use an I18N template to make the language sound correct for the singluar vs. plural wording.  read: member(s) -->\n" +
    "                <li ng-repeat=\"employee in employees\">{{employee.name}} and {{employee.dependants.length}} other member(s) would have a cost of {{employee.cost | currency}} per pay period.</li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"well span8\">\n" +
    "        <form name=\"formNewEmployee\" class=\"css-form\">\n" +
    "            <h4>Please enter the employee and their dependents below</h4>\n" +
    "\n" +
    "            <label>Employee Name:</label><br />\n" +
    "            <input type=\"text\" ng-model=\"form.name\" ng-pattern=\"word\" placeholder=\"Full Name\" required /> <br /><br />\n" +
    "\n" +
    "            <!--\n" +
    "            <label>Address:</label> <br />\n" +
    "            <input type=\"text\" ng-model=\"form.address.street\" size=\"33\" placeholder=\"Street\" required /> <br />\n" +
    "            <input type=\"text\" ng-model=\"form.address.city\" size=\"12\" placeholder=\"City\" required />,\n" +
    "            <input type=\"text\" ng-model=\"form.address.state\" size=\"2\" placeholder=\"State\" ng-pattern=\"state\" required />\n" +
    "            <input type=\"text\" ng-model=\"form.address.zip\" size=\"5\" placeholder=\"Zip Code\" ng-pattern=\"zip\" required /><br /><br />\n" +
    "            -->\n" +
    "\n" +
    "            <label>Dependents:</label>\n" +
    "            <select ng-model=\"form.dependant.type\">\n" +
    "                <option>partner</option>\n" +
    "                <option>child</option>\n" +
    "            </select>\n" +
    "\n" +
    "            <input type=\"text\" ng-model=\"form.dependant.name\" placeholder=\"Full Name\" />\n" +
    "            <button ng-click=\"addDependant()\" style=\"vertical-align: top;\" ng-disabled=\"!form.dependant.name\">Add Dependant</button>\n" +
    "\n" +
    "            <br />\n" +
    "            <div ng-repeat=\"dependant in dependants\">\n" +
    "                {{dependant.name}}\n" +
    "            </div>\n" +
    "            \n" +
    "            <br />\n" +
    "\n" +
    "            <!-- TODO: Use glyphicons (not added)-->\n" +
    "            <button type=\"reset\" ng-click=\"save()\" ng-disabled=\"isSaveDisabled()\" class=\"glyphicon-plus\">Save Employee Information</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("expand.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("expand.html",
    "<p>Things that I would expand upon before moving into production</p>\n" +
    "    \n" +
    "<ul>\n" +
    "    <li>Concatenate, obfuscation and minimize everything to a dist folder for testing and rollout</li>\n" +
    "    <li>Use browsersync to see changes in realtime in multiple sizes/resolutions</li>\n" +
    "    <li>Much more mock data and a better mock back end for http calls</li>\n" +
    "    <li>Perhaps use the foundation grid system, not bootstrap</li>\n" +
    "    <li>Break up functionality into directives.  Presently no directives exist.</li>\n" +
    "    <li>Better organize files into folders/modules and keep 3rd party vendor assets better organized with production ready versions.</li>\n" +
    "    <li>Remove a few various, unnecessary things I left in or complete using them</li>\n" +
    "    <li>Add automated, acceptance tests and ensure complete code coverage with a tool including the use of mock data</li>\n" +
    "    <li>It needs the \"hamburger\" menu item at a mobile resolution</li>\n" +
    "    <li>A real CSS style sheet, compiled from SASS file(s)</li>\n" +
    "    <li>Have a nightly build that ran all server and client side tests and sent a report via email</li>\n" +
    "    <li>The expand page layout is only OK, and doesn't look great at all resolutions.</li>\n" +
    "    <li>The form fields are very basic obviously, and needs a lot better client-side validation.</li>\n" +
    "    <li>Much, much, more</li>\n" +
    "</ul>");
}]);

angular.module("graph.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("graph.html",
    "<div class=\"row\">\n" +
    "    <div class=\"well span12\">\n" +
    "        <h3>Graphing ExsTensive JsOn Browser</h3>\n" +
    "        <label>Simple example of databinding and UI elements</label>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">    \n" +
    "    <div class=\"well span6\">\n" +
    "        <input type=\"text\" ng-model=\"vm.numberOfRandomNumbers\" placeholder=\"Please enter a number from 1 to 10\" style=\"width: 300px;\" />\n" +
    "\n" +
    "        <!-- TODO: Do not use a style attribute on the buttons and inputs -->\n" +
    "        <button ng-click=\"generateNumbers()\" value=\"Generate Numbers\" style=\"vertical-align: top;\" >Click Me</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"well span6\" ng-if=\"showResults()\">\n" +
    "        Here are your results:&nbsp;\n" +
    "\n" +
    "        <span ng-repeat=\"randomnumber in vm.randonNumbers track by $index\">\n" +
    "            {{randomnumber}}<span ng-if=\"!$last\">,</span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>    \n" +
    "\n" +
    "<div class=\"row\" ng-if=\"showResults()\">\n" +
    "    <div class=\"well span12\">\n" +
    "        <input type=\"text\" ng-model=\"vm.minimumValueToDisplay\" placeholder=\"Please select a minimum value to show\" style=\"width: 300px;\" />\n" +
    "\n" +
    "        <button ng-click=\"filterNumbers()\" value=\"Generate Numbers\" style=\"vertical-align: top;\" ng-disabled=\"vm.minimumValueToDisplay == ''\">Click Me</button>\n" +
    "\n" +
    "        <br /><br />\n" +
    "\n" +
    "        <canvas id=\"bar\" class=\"chart chart-bar\" chart-data=\"vm.graphData\" chart-labels=\"vm.labels\" chart-series=\"vm.series\"></canvas>\n" +
    "\n" +
    "        <div ng-if=\"vm.graphData[0].length == 0\">All random numbers have been hidden</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("invite.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("invite.html",
    "<!-- TODO: Put this in a SASS file and convert all the style attributes to classes as needed -->\n" +
    "<style>\n" +
    "    .selectedPerson {background-color: red}\n" +
    "</style>\n" +
    "\n" +
    "<div>\n" +
    "    <h1 style=\"text-align: center\">Ask for Fralix</h1>\n" +
    "\n" +
    "    <hr />\n" +
    "\n" +
    "    <!-- TODO: Might want to use a flexbox or something here -->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"well span4\" style=\"text-align: center; height: 120px;\" ng-class=\"{selectedPerson: vm.activePerson == 1}\" ng-click=\"selectPerson(1)\">\n" +
    "            <img src=\"{{vm.selectedPerson1Image}}\" style=\"height: 80px; width: 80px;\" />\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"well span4\" style=\"text-align: center; height: 120px;\">\n" +
    "            <h3>Make a Fralix intro to</h3>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"well span4\" style=\"text-align: center; height: 120px;\" ng-class=\"{selectedPerson: vm.activePerson == 2}\" ng-click=\"selectPerson(2)\">\n" +
    "            <img src=\"{{vm.selectedPerson2Image}}\" style=\"height: 80px; width: 80px;\" />\n" +
    "        </div>\n" +
    "    </div>    \n" +
    "\n" +
    "    <!-- TODO: Even if we could get away with downloading all people, we would need to update this angular filter so someone can't select the same person twice.  Also, it would be a handy feature to filter out people that are already selected/saved on the server -->\n" +
    "    <div ng-if=\"vm.activePerson != 0\">\n" +
    "        <!-- TODO: All the text on this template needs to be I18Ned (very few parts of this application have it but it exists) -->        \n" +
    "        Please type some information to find the person\n" +
    "        <input class=\"input-large\" style=\"width: 100%\" type=\"text\" ng-model=\"vm.selectedPerson\" typeahead-template-url=\"columnTwo.html\" typeahead=\"person for person in vm.peopleForConnecting | filter:$viewValue | limitTo:4\" typeahead-on-select=\"onPersonSelect($item, $model, $label)\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"well span12\">\n" +
    "            <div>Subject:</div>\n" +
    "            <div>\n" +
    "                <textarea style=\"width: 100%\" ng-model=\"vm.data.subject\"></textarea>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                Message:\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <textarea style=\"width: 100%\" ng-model=\"vm.data.message\"></textarea>\n" +
    "            </div>\n" +
    "            <div style=\"text-align: center\">\n" +
    "                <button type=\"reset\" ng-click=\"save()\" ng-disabled=\"isSaveDisabled()\">Send</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- TODO: Put this in a template file for caching -->\n" +
    "<script type=\"text/ng-template\" id=\"columnTwo.html\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"span2\">\n" +
    "            <img src=\"{{match.model.image_url}}\" />\n" +
    "        </div>\n" +
    "        <div class=\"span10\">\n" +
    "            {{ match.model.first_name }} {{ match.model.last_name }}<br />\n" +
    "            {{ match.model.company }}\n" +
    "            {{ match.model.title }}\n" +
    "            <br /><br />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</script>");
}]);

angular.module("read.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("read.html",
    "<p>Some notes on my decisions, technology and what I would do differently:</p>\n" +
    "\n" +
    "<br />\n" +
    "\n" +
    "<p>\n" +
    "    For most modern apps, I would use some kind of client-side MVC framework, because:\n" +
    "   <ul>\n" +
    "       <li>A lot of the web is moving towards this, and you have a lot of 3rd party options to build a full featured web site quickly that looks nice.</li>\n" +
    "       <li>It allows for a better separation of concerns, the server can be any technology it just responds with data (typically json).</li>\n" +
    "       <li>The SPA allows for a cleaner look by only updating the part of the current web page that needs to be updated (no full page refreshes).  It also preforms better this way.</li>\n" +
    "   </ul> \n" +
    "\n" +
    "    <br />\n" +
    "    Some additions to briefly touch on:\n" +
    "    <ul>\n" +
    "        <li>I replaced the stock routing with ui-router, because it is awesome.  I don't have any nested views or anything fancy.</li>\n" +
    "        <li>I do use template caching</li>\n" +
    "        <li>The intro block on the left is sort of I18Ned (English only).  I didn't do all the text or another language for the sake of time.</li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <br/>\n" +
    "    Tools:\n" +
    "    <ul>\n" +
    "        <li>I used the free IIS Express web server.  Primarily because I still prefer Visual Studio as an IDE.</li>\n" +
    "        <li>The site is hosted for free with its soruce on Github</li>\n" +
    "        <li>I used node's package manager to pull everything</li>\n" +
    "    </ul>\n" +
    "</p>");
}]);
