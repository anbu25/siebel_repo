//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=BeautifulThing-List&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-ListPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-ListPR");
 define("siebel/custom/BeautifulThing-ListPR", ["siebel/jqgridrenderer"],
  function () {
   SiebelAppFacade.BeautifulThing-ListPR = (function () {

    function BeautifulThing-ListPR(pm) {
     SiebelAppFacade.BeautifulThing-ListPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-ListPR, SiebelAppFacade.JQGridRenderer);

    BeautifulThing-ListPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-ListPR.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-ListPR:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-ListPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-ListPR:      ShowUI method reached.");
     SiebelAppFacade.BeautifulThing-ListPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-ListPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-ListPR:      BindData method reached.");
     SiebelAppFacade.BeautifulThing-ListPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-ListPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-ListPR:      BindEvents method reached.");
     SiebelAppFacade.BeautifulThing-ListPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    BeautifulThing-ListPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.GetPM().Get("GetName")+": BeautifulThing-ListPR:      EndLife method reached.");
     SiebelAppFacade.BeautifulThing-ListPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-ListPR;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-ListPR";
 })
}
