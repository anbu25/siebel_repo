//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PM&object=DesktopForm&name=BeautifulThing&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThingPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThingPM");
 define("siebel/custom/BeautifulThingPM", ["siebel/pmodel"],
  function () {
   SiebelAppFacade.BeautifulThingPM = (function () {

    function BeautifulThingPM(pm) {
     SiebelAppFacade.BeautifulThingPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThingPM, SiebelAppFacade.PresentationModel);

    BeautifulThingPM.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThingPM.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.Get("GetName")+": BeautifulThingPM:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThingPM.prototype.Setup = function (propSet) {
     // Setup is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.Get("GetName")+": BeautifulThingPM:      Setup method reached.");
     SiebelAppFacade.BeautifulThingPM.superclass.Setup.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThingPM;
   }()
  );
  return "SiebelAppFacade.BeautifulThingPM";
 })
}
