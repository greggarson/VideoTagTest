Video Tag Failing in Ionic Platform
===================================

Platform:
---------

cli packages: (/usr/local/lib/node_modules)

    @ionic/cli-utils  : 1.19.2
    ionic (Ionic CLI) : 3.20.0

global packages:

    cordova (Cordova CLI) : 7.1.0 

local packages:

    @ionic/app-scripts : 3.1.8
    Cordova Platforms  : ios 4.5.4
    Ionic Framework    : ionic-angular 3.9.2

System:

    ios-deploy : 1.9.2 
    Node       : v6.10.3
    npm        : 5.5.1 
    OS         : macOS High Sierra
    Xcode      : Xcode 9.3 Build version 9E145 

Environment Variables:

    ANDROID_HOME : not set

Misc:

    backend : pro

Issue:
------

When testing or building out the app to an iPad the video tag used on the list view fails
and does not play the video file on the 17th load of the page.  

Steps to reproduce:

* Run app on device from Xcode
* From Sidenav click on the list view, note video plays
* Do so 16 more times
* On 17th time note that the video fails.

Watching network traffic in Safari suggests that the video is getting loaded correctly. 
Would appeeciate any help figuring out what i'm missing here.  
