//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PM&object=MobileForm&name=BeautifulThing-MobileForm&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-MobileFormPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-MobileFormPM");
 define("siebel/custom/BeautifulThing-MobileFormPM", ["siebel/pmodel"],
  function () {
   SiebelAppFacade.BeautifulThing-MobileFormPM = (function () {

    function BeautifulThing-MobileFormPM(pm) {
     SiebelAppFacade.BeautifulThing-MobileFormPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-MobileFormPM, SiebelAppFacade.PresentationModel);

    BeautifulThing-MobileFormPM.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-MobileFormPM.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-MobileFormPM:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobileFormPM.prototype.Setup = function (propSet) {
     // Setup is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-MobileFormPM:      Setup method reached.");
     SiebelAppFacade.BeautifulThing-MobileFormPM.superclass.Setup.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-MobileFormPM;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-MobileFormPM";
 })
}
