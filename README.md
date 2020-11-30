# SUMMARY
A simple plugin to add a sidebar navigation to your web-apps

## USAGE
### Basic
1. Download the CSS and JS files from [here](https://github.com/TheMaggieSimpson/sidebarPlugin/tree/master/lib)
2. Put CSS in `<head>` and JS at the bottom of `<body>`
3. Then add the `pluginSidebar` on `<body>`
4. Example:
```
<html>
    <head>
        ...
        <link href="pluginSidebar-1.0.css" rel="stylesheet">
        ...
    </head>
    <body>
        ...
        <div id="pluginSidebar">
            your menu goes here
        </div>
        ...
        <script src='pluginSidebar-1.0.js' type="text/javascript"></script>
    </body>
</html>
```
![image](https://github.com/TheMaggieSimpson/sidebarPlugin/blob/master/img/default.PNG)
*Screenshot: Default theme*

### Customised
1. Customising the sidebar using JS:
```
var mySidebarNewSetting = {
    title: 'My Cool Project', // put a title on the sidebar
    width: '350px', // set the sidebar width
    theme: 'dark' // options: light, dark | default: light
}
setSidebar(mySidebarNewSetting)
```
![image](https://github.com/TheMaggieSimpson/sidebarPlugin/blob/master/img/custom.PNG)
*Screenshot: Dark theme*

## EXAMPLE
A working example implemented on CesiumJS is available [here](https://github.com/TheMaggieSimpson/sidebarPlugin/blob/master/example/cesiumjs).
