//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PM&object=DesktopTree&name=BeautifulThing-Tree&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-TreePM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-TreePM");
 define("siebel/custom/BeautifulThing-TreePM", ["siebel/explorerpmodel"],
  function () {
   SiebelAppFacade.BeautifulThing-TreePM = (function () {

    function BeautifulThing-TreePM(pm) {
     SiebelAppFacade.BeautifulThing-TreePM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-TreePM, SiebelAppFacade.ExplorerPresentationModel);

    BeautifulThing-TreePM.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-TreePM.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-TreePM:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-TreePM.prototype.Setup = function (propSet) {
     // Setup is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-TreePM:      Setup method reached.");
     SiebelAppFacade.BeautifulThing-TreePM.superclass.Setup.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-TreePM;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-TreePM";
 })
}
