//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PM&object=View&name=BeautifulThingView&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThingViewPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThingViewPM");
 define("siebel/custom/BeautifulThingViewPM", ["siebel/viewpm"],
  function () {
   SiebelAppFacade.BeautifulThingViewPM = (function () {

    function BeautifulThingViewPM(pm) {
     SiebelAppFacade.BeautifulThingViewPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThingViewPM, SiebelAppFacade.ViewPM);

    BeautifulThingViewPM.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingViewPM.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.Get("GetName")+": BeautifulThingViewPM:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThingViewPM.prototype.Setup = function (propSet) {
     // Setup is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.Get("GetName")+": BeautifulThingViewPM:      Setup method reached.");
     SiebelAppFacade.BeautifulThingViewPM.superclass.Setup.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThingViewPM;
   }()
  );
  return "SiebelAppFacade.BeautifulThingViewPM";
 })
}
