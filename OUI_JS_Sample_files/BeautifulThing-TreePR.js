//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopTree&name=BeautifulThing-Tree&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-TreePR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-TreePR");
 define("siebel/custom/BeautifulThing-TreePR", ["siebel/treeappletphyrenderer"],
  function () {
   SiebelAppFacade.BeautifulThing-TreePR = (function () {

    function BeautifulThing-TreePR(pm) {
     SiebelAppFacade.BeautifulThing-TreePR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-TreePR, SiebelAppFacade.TreeAppletPR);

    BeautifulThing-TreePR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-TreePR.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-TreePR:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-TreePR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-TreePR:      ShowUI method reached.");
     SiebelAppFacade.BeautifulThing-TreePR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-TreePR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-TreePR:      BindData method reached.");
     SiebelAppFacade.BeautifulThing-TreePR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-TreePR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-TreePR:      BindEvents method reached.");
     SiebelAppFacade.BeautifulThing-TreePR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-TreePR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-TreePR:      EndLife method reached.");
     SiebelAppFacade.BeautifulThing-TreePR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-TreePR;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-TreePR";
 })
}
