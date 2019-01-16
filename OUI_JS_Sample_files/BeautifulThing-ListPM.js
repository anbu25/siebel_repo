//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PM&object=DesktopList&name=BeautifulThing-List&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-ListPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-ListPM");
 define("siebel/custom/BeautifulThing-ListPM", ["siebel/listpmodel"],
  function () {
   SiebelAppFacade.BeautifulThing-ListPM = (function () {

    function BeautifulThing-ListPM(pm) {
     SiebelAppFacade.BeautifulThing-ListPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-ListPM, SiebelAppFacade.ListPresentationModel);

    BeautifulThing-ListPM.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-ListPM.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-ListPM:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-ListPM.prototype.Setup = function (propSet) {
     // Setup is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-ListPM:      Setup method reached.");
     SiebelAppFacade.BeautifulThing-ListPM.superclass.Setup.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-ListPM;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-ListPM";
 })
}
