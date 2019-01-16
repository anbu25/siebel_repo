//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopForm&name=BeautifulThing&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThingPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThingPR");
 define("siebel/custom/BeautifulThingPR", ["siebel/phyrenderer"],
  function () {
   SiebelAppFacade.BeautifulThingPR = (function () {

    function BeautifulThingPR(pm) {
     SiebelAppFacade.BeautifulThingPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThingPR, SiebelAppFacade.PhysicalRenderer);

    BeautifulThingPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingPR.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingPR:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingPR:      ShowUI method reached.");
     SiebelAppFacade.BeautifulThingPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingPR:      BindData method reached.");
     SiebelAppFacade.BeautifulThingPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingPR:      BindEvents method reached.");
     SiebelAppFacade.BeautifulThingPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingPR:      EndLife method reached.");
     SiebelAppFacade.BeautifulThingPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThingPR;
   }()
  );
  return "SiebelAppFacade.BeautifulThingPR";
 })
}
