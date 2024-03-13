# WT_CW2_15897

The CRUD app that I created is about ordering a coffee. I used 3 web pages for my application. First page is a main page where a person can order a coffee by giving the personal details and coffee preferences. Second page is created for displaying all coffee orders and people who ordered it with their phone number included. Lastyly, I created a third page for updating coffee orders. A person can update his or her orders by editing the form.
The project will not work because of nodu_modules being deleted from the root folder, as it is required to not upload the nodu_modules folder to intranet. However, so as to run the code, it is firstly required to install this folder by writing (npm intstall) in new terminal.
After that, you can run the code by writing (node server.js) in terminal and application will work. I used several dependencies for my project, they are (express, express-validator, and pug).

The link to the github repository: https://github.com/00015897/WT_CW2_15897.git

I used the given project structure for my project as it was recommended in coursework description.

1. The javaScript files in controllers folder are used for rendering pug files in specific routes and have access to the JavaScript file under services folder where actions for create and update logic happen.
2. The css and javaScript folders under public folder are responsible for styling, and loading the js files at the same time listening for form submission events
3. Routes folder is used for proper routing the web-pages and for checking post requests for ordering a coffee.
4. Service folder contains a JavaScript file where, adding to and updating orders in the dataset happens. Also (get_orders) method is used for getting the all orders from the dataset.
5. All pug files are located under the views folder. Pug files are rendered to HTML code in controllers folder as browsers can not read pug files without rendering them.
6. .gitignore file is used for ignoring the node_modules when pushing the project to the gitHub
7. ordersDB.json file is used for storing the data in objects.
8. server.js file is used for managing the port and importing the modules
9. The list of dependencies that are used for this project can be seen under the package.json file