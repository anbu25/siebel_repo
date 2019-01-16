//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PM&object=MobileList&name=BeautifulThing-Mobile&userprops=&comments=Yes&logging=Yes
if (typeof(SiebelAppFacade.BeautifulThing-MobilePM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.BeautifulThing-MobilePM");
 define("siebel/custom/BeautifulThing-MobilePM", ["siebel/listpmodel"],
  function () {
   SiebelAppFacade.BeautifulThing-MobilePM = (function () {

    function BeautifulThing-MobilePM(pm) {
     SiebelAppFacade.BeautifulThing-MobilePM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(BeautifulThing-MobilePM, SiebelAppFacade.ListPresentationModel);

    BeautifulThing-MobilePM.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.BeautifulThing-MobilePM.superclass.Init.apply(this, arguments);
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-MobilePM:      Init method reached.");
     // Add code here that should happen after default processing
    }

    BeautifulThing-MobilePM.prototype.Setup = function (propSet) {
     // Setup is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelJS.Log(this.Get("GetName")+": BeautifulThing-MobilePM:      Setup method reached.");
     SiebelAppFacade.BeautifulThing-MobilePM.superclass.Setup.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return BeautifulThing-MobilePM;
   }()
  );
  return "SiebelAppFacade.BeautifulThing-MobilePM";
 })
}
