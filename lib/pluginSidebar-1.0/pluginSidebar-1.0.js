var bodyEl = document.getElementsByTagName("BODY")[0]
var pluginSidebarEl = document.getElementById("pluginSidebar")

var pluginSidebarSetting = {
    width: '250px',
    theme: 'light'
}
pluginSidebarEl.style.width = pluginSidebarSetting.width
pluginSidebarEl.className = pluginSidebarSetting.theme

// generate pluginOpenSidebar
var openSidebarButtonEl = document.createElement("div")
openSidebarButtonEl.setAttribute("id", "pluginOpenSidebar")
openSidebarButtonEl.className = pluginSidebarSetting.theme
openSidebarButtonEl.onclick = function() {
    openSidebarButtonEl.style.display = 'none'
    pluginSidebarEl.style.display = 'block'
}
var openSidebarTextNode = document.createTextNode("\u2630")
openSidebarButtonEl.appendChild(openSidebarTextNode)
bodyEl.prepend(openSidebarButtonEl)

// generate sidebar header
var sidebarHeaderEl = document.createElement("p")
sidebarHeaderEl.style.textAlign = "left"
sidebarHeaderEl.style.fontWeight = "bold"
var headerTextNode = document.createTextNode("")
sidebarHeaderEl.appendChild(headerTextNode)
pluginSidebarEl.prepend(sidebarHeaderEl)

// generate (x) to close sidebar
var closeSidebarEl = document.createElement("span")
closeSidebarEl.style.float = "right"
closeSidebarEl.style.cursor = "pointer"
closeSidebarEl.onclick = function() {
    pluginSidebarEl.style.display = 'none'
    openSidebarButtonEl.style.display = 'block'
}
var closeTextNode = document.createTextNode("\u2573")
closeSidebarEl.appendChild(closeTextNode)
sidebarHeaderEl.prepend(closeSidebarEl)

// customize sidebar
function setSidebar(newSetting) {
    if (newSetting.width) pluginSidebarEl.style.width = newSetting.width
    if (newSetting.theme) {
        pluginSidebarEl.className = newSetting.theme
        openSidebarButtonEl.className = newSetting.theme
    }
    if (newSetting.title) {
        headerTextNode.nodeValue = newSetting.title
    }
}