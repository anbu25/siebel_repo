//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=MobileList&name=BeautifulThing-Mobile&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-MobilePR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-MobilePR");
 define("siebel/custom/BeautifulThing-MobilePR", ["siebel/jqmlistrenderer"],
  function () {
   SiebelAppFacade.BeautifulThing-MobilePR = (function () {

    function BeautifulThing-MobilePR(pm) {
     SiebelAppFacade.BeautifulThing-MobilePR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-MobilePR, SiebelAppFacade.JQMListRenderer);

    BeautifulThing-MobilePR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-MobilePR.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobilePR:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobilePR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobilePR:      ShowUI method reached.");
     SiebelAppFacade.BeautifulThing-MobilePR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobilePR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobilePR:      BindData method reached.");
     SiebelAppFacade.BeautifulThing-MobilePR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobilePR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobilePR:      BindEvents method reached.");
     SiebelAppFacade.BeautifulThing-MobilePR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobilePR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-MobilePR:      EndLife method reached.");
     SiebelAppFacade.BeautifulThing-MobilePR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-MobilePR;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-MobilePR";
 })
}
