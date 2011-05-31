var tapOn = function(label) {
  UIATarget.localTarget()
    .frontMostApp()
    .mainWindow()
    .appWindow
    .elements()[label]
    .tap();
}
