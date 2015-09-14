# React Native Flux Boilerplate
Starter boilerplate for React native using flux, rn webpack and hot reload

    git clone https://github.com/OssamaZ/react-native-flux-boilerplate
    mv react-native-flux-boilerplate myAwesomeApp
    cd myAwesomeApp
    npm install
    npm run hot
    run project

###### PS:  make sure to enable live reload and chrome debugging

The starting point of your project is in the folder App, dont forget to update the webpack config file if you change this.

The babel loader is also preconfigured, so you can use full ES6 in your code ;)

###### Preview:

![Preview](http://i.imgur.com/76qhgae.gif)

### Issues:

When you first run 'npm run hot' you'll maybe encounter this error:

![Error](http://i.imgur.com/5MeksHK.png)

To fix this, 
    ctrl+c in your terminal 
    run: npm start (to run without the hot reload)
    after React packager ready. reload the simulator (it should work fine but without hot reload support)

Make sure you select *Debug in chrome* option (cmd+D)

![Fix](http://i.imgur.com/Hyp8krZ.png)


#### Projects:
* [flux](https://github.com/facebook/flux)
* [React native webpack server](https://github.com/mjohnston/react-native-webpack-server)
* [React hot loader](https://github.com/gaearon/react-hot-loader)

