//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=View&name=BeautifulThingView&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThingViewPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThingViewPR");
 define("siebel/custom/BeautifulThingViewPR", ["siebel/viewpr"],
  function () {
   SiebelAppFacade.BeautifulThingViewPR = (function () {

    function BeautifulThingViewPR(pm) {
     SiebelAppFacade.BeautifulThingViewPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThingViewPR, SiebelAppFacade.ViewPR);

    BeautifulThingViewPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingViewPR.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingViewPR:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThingViewPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingViewPR:      ShowUI method reached.");
     SiebelAppFacade.BeautifulThingViewPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingViewPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingViewPR:      BindData method reached.");
     SiebelAppFacade.BeautifulThingViewPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingViewPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingViewPR:      BindEvents method reached.");
     SiebelAppFacade.BeautifulThingViewPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThingViewPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThingViewPR:      EndLife method reached.");
     SiebelAppFacade.BeautifulThingViewPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThingViewPR;
   }()
  );
  return "SiebelAppFacade.BeautifulThingViewPR";
 })
}
