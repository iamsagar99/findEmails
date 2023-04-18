This project is a Chrome Extension that generates a list of all email addresses present on the currently opened web page.

    Build Instructions:

        Clone the repository to your local machine.
        Open the terminal and navigate to the project directory.
        Run npm install to install all necessary dependencies.
        Run npm run build to execute the build script.

    Build Script:
    
    The build script is defined in the package.json file and can be executed by running npm run build. 
    The script performs the following steps:

        Copies the manifest.json file to the dist directory.
        Compiles the popup.js file using Babel and outputs it to the dist directory.
        Compiles the content.js file using Babel and outputs it to the dist directory.

    Operating System and Build Environment Requirements:

        The project can be built on any operating system that supports Node.js and npm. The following versions were used during development:

        Node.js v14.17.6
        npm v6.14.15
        Programs Used in the Build Process:

    Node.js and npm are required to install and manage dependencies.
    Babel is used to transpile the ES6 code in popup.js and content.js to ES5-compatible code. It can be installed by running npm install --save-dev @babel/core @babel/cli @babel/preset-env.
    The chrome API is used to interact with the browser, so no additional libraries are needed.

Thank you for reviewing my project! This is my first attempt at developing a Firefox extension and I appreciate your time and feedback.




