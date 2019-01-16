//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=MobileForm&name=BeautifulThing-MobileForm&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-MobileFormPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-MobileFormPR");
 define("siebel/custom/BeautifulThing-MobileFormPR", ["siebel/jqmformrenderer"],
  function () {
   SiebelAppFacade.BeautifulThing-MobileFormPR = (function () {

    function BeautifulThing-MobileFormPR(pm) {
     SiebelAppFacade.BeautifulThing-MobileFormPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-MobileFormPR, SiebelAppFacade.JQMFormRenderer);

    BeautifulThing-MobileFormPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-MobileFormPR.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobileFormPR:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobileFormPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobileFormPR:      ShowUI method reached.");
     SiebelAppFacade.BeautifulThing-MobileFormPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobileFormPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobileFormPR:      BindData method reached.");
     SiebelAppFacade.BeautifulThing-MobileFormPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobileFormPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobileFormPR:      BindEvents method reached.");
     SiebelAppFacade.BeautifulThing-MobileFormPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobileFormPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobileFormPR:      EndLife method reached.");
     SiebelAppFacade.BeautifulThing-MobileFormPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-MobileFormPR;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-MobileFormPR";
 })
}
