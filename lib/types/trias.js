"use strict";
// All of these are from VDV 431-2 Teil 2: EKAP-Schnittstellenbeschreibung V1.2.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weekday = exports.TaxiSubmode = exports.FunicularSubmode = exports.TelecabinSubmode = exports.AirSubmode = exports.WaterSubmode = exports.TramSubmode = exports.BusSubmode = exports.MetroSubmode = exports.CoachSubmode = exports.RailSubmode = exports.PtModes = exports.InterchangeModes = exports.ErrorCodes = exports.SIRIStatusCodes = void 0;
// 6.4.1. Fehlercodes aus SIRI
var SIRIStatusCodes;
(function (SIRIStatusCodes) {
    // Succcess
    SIRIStatusCodes[SIRIStatusCodes["OK"] = 0] = "OK";
    // Systemic Error
    SIRIStatusCodes[SIRIStatusCodes["RequestTimeout"] = 1] = "RequestTimeout";
    SIRIStatusCodes[SIRIStatusCodes["InvalidRequest"] = 2] = "InvalidRequest";
    SIRIStatusCodes[SIRIStatusCodes["Unauthorized"] = 3] = "Unauthorized";
    SIRIStatusCodes[SIRIStatusCodes["Forbidden"] = 4] = "Forbidden";
    SIRIStatusCodes[SIRIStatusCodes["NotFound"] = 5] = "NotFound";
    // Application Error
    SIRIStatusCodes[SIRIStatusCodes["VersionNotSupported"] = 6] = "VersionNotSupported";
    SIRIStatusCodes[SIRIStatusCodes["CapabilityNotSupported"] = 7] = "CapabilityNotSupported";
    SIRIStatusCodes[SIRIStatusCodes["ServiceNotAvailable"] = 8] = "ServiceNotAvailable";
    SIRIStatusCodes[SIRIStatusCodes["AccessNotAllowed"] = 9] = "AccessNotAllowed";
    SIRIStatusCodes[SIRIStatusCodes["NoInfoForTopic"] = 10] = "NoInfoForTopic";
    SIRIStatusCodes[SIRIStatusCodes["UnknownSubscriber"] = 11] = "UnknownSubscriber";
    SIRIStatusCodes[SIRIStatusCodes["UnknownSubscription"] = 12] = "UnknownSubscription";
    SIRIStatusCodes[SIRIStatusCodes["AllowedResourceUsageExceeded"] = 13] = "AllowedResourceUsageExceeded";
    SIRIStatusCodes[SIRIStatusCodes["OtherError"] = 14] = "OtherError";
})(SIRIStatusCodes = exports.SIRIStatusCodes || (exports.SIRIStatusCodes = {}));
// 6.4.2. Allgemeine TRIAS-Fehlerzustände
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["AuthFailure"] = "AUTH_FAILURE";
    ErrorCodes["AuthMissing"] = "AUTH_MISSING";
    ErrorCodes["AuthUserUnknown"] = "AUTH_USER_UNKNOWN";
    ErrorCodes["Error"] = "TRIASGENERIC_ERROR";
    ErrorCodes["ServiceNotSupported"] = "TRIASGENERIC_SERVICENOTSUPPORTED";
    ErrorCodes["RequestNotSupported"] = "TRIASGENERIC_REQUESTNOTSUPPORTED";
    ErrorCodes["FeatureNotSupported"] = "TRIASGENERIC_FEATURENOTSUPPORTED";
    ErrorCodes["LanguageNotSupported"] = "TRIASGENERIC_LANGUAGENOTSUPPORTED";
    ErrorCodes["ExceptionFromRequestedLanguage"] = "TRIASGENERIC_EXCEPTIONFROMREQUESTEDLANGUAGE";
    ErrorCodes["DataVersionNotAvailable"] = "TRIASGENERIC_DATAVERSIONNOTAVAILABLE";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
// 7.3.1. Einfache Typen
// Klassifizierung der Individualverkehrsarten.
var IndividualModes;
(function (IndividualModes) {
    IndividualModes["Walk"] = "walk";
    IndividualModes["Cycle"] = "cycle";
    IndividualModes["Taxi"] = "taxi";
    IndividualModes["SelfDriveCar"] = "self-drive-car";
    IndividualModes["OthersDriveCar"] = "others-drive-car";
    IndividualModes["Motorcycle"] = "motorcycle";
    IndividualModes["Truck"] = "truck";
})(IndividualModes || (IndividualModes = {}));
// Klassifizierung von kontinuierlichen Verkehrsarten, die zu jeder beliebigen Zeit (ohne Fahrplan) stattfinden können.
var ContinuousModes;
(function (ContinuousModes) {
    ContinuousModes["Walk"] = "walk";
    ContinuousModes["DemandResponse"] = "demandResponsive";
    ContinuousModes["ReplacementService"] = "replacementService";
})(ContinuousModes || (ContinuousModes = {}));
// Klassifizierung von Umsteigevorgängen
var InterchangeModes;
(function (InterchangeModes) {
    InterchangeModes["Walk"] = "walk";
    InterchangeModes["ParkAndRide"] = "parkAndRide";
    InterchangeModes["BikeAndRide"] = "bikeAndRide";
    InterchangeModes["CarHire"] = "carHire";
    InterchangeModes["BikeHire"] = "bikeHire";
    InterchangeModes["ProtectedConnection"] = "protectedConnection";
    InterchangeModes["GuaranteedConnection"] = "guaranteedConnection";
    InterchangeModes["RemainInVehicle"] = "remainInVehicle";
    InterchangeModes["ChangeWithinVehicle"] = "changeWithinVehicle";
    InterchangeModes["CheckIn"] = "checkIn";
    InterchangeModes["CheckOut"] = "checkOut";
})(InterchangeModes = exports.InterchangeModes || (exports.InterchangeModes = {}));
// Klassifizierung der ÖV-Verkehrsmittel (nach TPEG pti_table 01).
var PtModes;
(function (PtModes) {
    PtModes["All"] = "all";
    PtModes["Unknown"] = "unknown";
    PtModes["Air"] = "air";
    PtModes["Bus"] = "bus";
    PtModes["TrolleyBus"] = "trolleyBus";
    PtModes["Tram"] = "tram";
    PtModes["Coach"] = "coach";
    PtModes["Rail"] = "rail";
    PtModes["IntercityRail"] = "intercityRail";
    PtModes["UrbanRail"] = "urbanRail";
    PtModes["Metro"] = "metro";
    PtModes["Water"] = "water";
    PtModes["Cableway"] = "cableway";
    PtModes["Funicular"] = "funicular";
    PtModes["Taxi"] = "taxi";
})(PtModes = exports.PtModes || (exports.PtModes = {}));
// Unter-Klassifizierung der Züge (nach TPEG pti_table 02).
var RailSubmode;
(function (RailSubmode) {
    RailSubmode["Unknown"] = "unknown";
    RailSubmode["Undefined"] = "undefined";
    RailSubmode["Local"] = "local";
    RailSubmode["HighSpeedRail"] = "highSpeedRail";
    RailSubmode["SuburbanRailway"] = "suburbanRailway";
    RailSubmode["RegionalRail"] = "regionalRail";
    RailSubmode["InterregionalRail"] = "interregionalRail";
    RailSubmode["LongDistance"] = "longDistance";
    RailSubmode["International"] = "international";
    RailSubmode["SleeperRailService"] = "sleeperRailService";
    RailSubmode["NightRail"] = "nightRail";
    RailSubmode["CarTransportRailService"] = "carTransportRailService";
    RailSubmode["TouristRailway"] = "touristRailway";
    RailSubmode["RailShuttle"] = "railShuttle";
    RailSubmode["ReplacementRailService"] = "replacementRailService";
    RailSubmode["SpecialTrain"] = "specialTrain";
    RailSubmode["CrossCountryRail"] = "crossCountryRail";
    RailSubmode["RackAndPinionRailway"] = "rackAndPinionRailway";
})(RailSubmode = exports.RailSubmode || (exports.RailSubmode = {}));
// Unter-Klassifizierung der Überlandbusse (nach TPEG pti_table 03).
var CoachSubmode;
(function (CoachSubmode) {
    CoachSubmode["Unknown"] = "unknown";
    CoachSubmode["Undefined"] = "undefined";
    CoachSubmode["InternationalCoach"] = "internationalCoach";
    CoachSubmode["NationalCoach"] = "nationalCoach";
    CoachSubmode["ShuttleCoach"] = "shuttleCoach";
    CoachSubmode["RegionalCoach"] = "regionalCoach";
    CoachSubmode["SpecialCoach"] = "specialCoach";
    CoachSubmode["SightseeingCoach"] = "sightseeingCoach";
    CoachSubmode["TouristCoach"] = "touristCoach";
    CoachSubmode["CommuterCoach"] = "commuterCoach";
})(CoachSubmode = exports.CoachSubmode || (exports.CoachSubmode = {}));
// Unter-Klassifizierung der Untergrundbahnen (nach TPEG pti_table 04).
var MetroSubmode;
(function (MetroSubmode) {
    MetroSubmode["Unknown"] = "unknown";
    MetroSubmode["Undefined"] = "undefined";
    MetroSubmode["Metro"] = "metro";
    MetroSubmode["Tube"] = "tube";
    MetroSubmode["UrbanRailway"] = "urbanRailway";
})(MetroSubmode = exports.MetroSubmode || (exports.MetroSubmode = {}));
// Unter-Klassifizierung der Busse (nach TPEG pti_table 05).
var BusSubmode;
(function (BusSubmode) {
    BusSubmode["Unknown"] = "unknown";
    BusSubmode["Undefined"] = "undefined";
    BusSubmode["LocalBus"] = "localBus";
    BusSubmode["RegionalBus"] = "regionalBus";
    BusSubmode["ExpressBus"] = "expressBus";
    BusSubmode["NightBus"] = "nightBus";
    BusSubmode["PostBus"] = "postBus";
    BusSubmode["SpecialNeedsBus"] = "specialNeedsBus";
    BusSubmode["MobilityBus"] = "mobilityBus";
    BusSubmode["MobilityBusForRegisteredDisabled"] = "mobilityBusForRegisteredDisabled";
    BusSubmode["SightseeingBus"] = "sightseeingBus";
    BusSubmode["ShuttleBus"] = "shuttleBus";
    BusSubmode["SchoolBus"] = "schoolBus";
    BusSubmode["SchoolAndPublicServiceBus"] = "schoolAndPublicServiceBus";
    BusSubmode["RailReplacementBus"] = "railReplacementBus";
    BusSubmode["DemandAndResponseBus"] = "demandAndResponseBus";
    BusSubmode["AirportLinkBus"] = "airportLinkBus";
})(BusSubmode = exports.BusSubmode || (exports.BusSubmode = {}));
// Unter-Klassifizierung der Straßenbahnen (nach TPEG pti_table 06).
var TramSubmode;
(function (TramSubmode) {
    TramSubmode["Unknown"] = "unknown";
    TramSubmode["Undefined"] = "undefined";
    TramSubmode["CityTram"] = "cityTram";
    TramSubmode["LocalTram"] = "localTram";
    TramSubmode["RegionalTram"] = "regionalTram";
    TramSubmode["SightseeingTram"] = "sightseeingTram";
    TramSubmode["ShuttleTram"] = "shuttleTram";
})(TramSubmode = exports.TramSubmode || (exports.TramSubmode = {}));
// Unter-Klassifizierung der Wasserverkehrsmittel (nach TPEG pti_table 07).
var WaterSubmode;
(function (WaterSubmode) {
    WaterSubmode["Unknown"] = "unknown";
    WaterSubmode["Undefined"] = "undefined";
    WaterSubmode["InternationalCarFerry"] = "internationalCarFerry";
    WaterSubmode["NationalCarFerry"] = "nationalCarFerry";
    WaterSubmode["RegionalCarFerry"] = "regionalCarFerry";
    WaterSubmode["LocalCarFerry"] = "localCarFerry";
    WaterSubmode["InternationalPassengerFerry"] = "internationalPassengerFerry";
    WaterSubmode["NationalPassengerFerry"] = "nationalPassengerFerry";
    WaterSubmode["RegionalPassengerFerry"] = "regionalPassengerFerry";
    WaterSubmode["LocalPassengerFerry"] = "localPassengerFerry";
    WaterSubmode["PostBoat"] = "postBoat";
    WaterSubmode["TrainFerry"] = "trainFerry";
    WaterSubmode["RoadFerryLink"] = "roadFerryLink";
    WaterSubmode["AirportBoatLink"] = "airportBoatLink";
    WaterSubmode["HighSpeedVehicleService"] = "highSpeedVehicleService";
    WaterSubmode["HighSpeedPassengerService"] = "highSpeedPassengerService";
    WaterSubmode["SightseeingService"] = "sightseeingService";
    WaterSubmode["SchoolBoat"] = "schoolBoat";
    WaterSubmode["CableFerry"] = "cableFerry";
    WaterSubmode["RiverBus"] = "riverBus";
    // todo: this one has been cut off in the PDF
    WaterSubmode["ScheduledTodo"] = "scheduled-";
})(WaterSubmode = exports.WaterSubmode || (exports.WaterSubmode = {}));
// Unter-Klassifizierung der Luftverkehrsmittel (nach TPEG pti_table 08).
var AirSubmode;
(function (AirSubmode) {
    AirSubmode["Unknown"] = "unknown";
    AirSubmode["Undefined"] = "undefined";
    AirSubmode["InternationalFlight"] = "internationalFlight";
    AirSubmode["DomesticFlight"] = "domesticFlight";
    AirSubmode["IntercontinentalFlight"] = "intercontinentalFlight";
    AirSubmode["DomesticScheduledFlight"] = "domesticScheduledFlight";
    AirSubmode["ShuttleFlight"] = "shuttleFlight";
    AirSubmode["IntercontinentalCharterFlight"] = "intercontinentalCharterFlight";
    AirSubmode["InternationalCharterFlight"] = "internationalCharterFlight";
    AirSubmode["RoundTripCharterFlight"] = "roundTripCharterFlight";
    AirSubmode["SightseeingFlight"] = "sightseeingFlight";
    AirSubmode["HelicopterService"] = "helicopterService";
    AirSubmode["DomesticCharterFlight"] = "domesticCharterFlight";
    AirSubmode["SchengenAreaFlight"] = "SchengenAreaFlight";
    AirSubmode["AirshipService"] = "airshipService";
    AirSubmode["ShortHaulInternationalFlight"] = "shortHaulInternationalFlight";
    AirSubmode["CanalBarge"] = "canalBarge";
})(AirSubmode = exports.AirSubmode || (exports.AirSubmode = {}));
// Unter-Klassifizierung der Lift- und Aufzugsarten (nach TPEG pti_table 09).
var TelecabinSubmode;
(function (TelecabinSubmode) {
    TelecabinSubmode["Unknown"] = "unknown";
    TelecabinSubmode["Undefined"] = "undefined";
    TelecabinSubmode["Telecabin"] = "telecabin";
    TelecabinSubmode["CableCar"] = "cableCar";
    TelecabinSubmode["Lift"] = "lift";
    TelecabinSubmode["ChairLift"] = "chairLift";
    TelecabinSubmode["DragLift"] = "dragLift";
    TelecabinSubmode["TelecabinLink"] = "telecabinLink";
})(TelecabinSubmode = exports.TelecabinSubmode || (exports.TelecabinSubmode = {}));
// Unter-Klassifizierung der Seilbahnen (nach TPEG pti_table 10).
var FunicularSubmode;
(function (FunicularSubmode) {
    FunicularSubmode["Unknown"] = "unknown";
    FunicularSubmode["Funicular"] = "funicular";
    FunicularSubmode["AllFunicularServices"] = "allFunicularServices";
    FunicularSubmode["UndefinedFunicular"] = "undefinedFunicular";
})(FunicularSubmode = exports.FunicularSubmode || (exports.FunicularSubmode = {}));
// Unter-Klassifizierung der Taxiarten (nach TPEG pti_table 11).
var TaxiSubmode;
(function (TaxiSubmode) {
    TaxiSubmode["Unknown"] = "unknown";
    TaxiSubmode["Undefined"] = "undefined";
    TaxiSubmode["CommunalTaxi"] = "communalTaxi";
    TaxiSubmode["WaterTaxi"] = "waterTaxi";
    TaxiSubmode["RailTaxi"] = "railTaxi";
    TaxiSubmode["BikeTaxi"] = "bikeTaxi";
    TaxiSubmode["BlackCab"] = "blackCab";
    TaxiSubmode["MiniCab"] = "miniCab";
    TaxiSubmode["AllTaxiServices"] = "allTaxiServices";
})(TaxiSubmode = exports.TaxiSubmode || (exports.TaxiSubmode = {}));
// 7.4.9. WeekdayTimePeriodStructure
var Weekday;
(function (Weekday) {
    Weekday["Sunday"] = "Sunday";
    Weekday["Monday"] = "Monday";
    Weekday["Tuesday"] = "Tuesday";
    Weekday["Wednesday"] = "Wednesday";
    Weekday["Thursday"] = "Thursday";
    Weekday["Friday"] = "Friday";
    Weekday["Saturday"] = "Saturday";
    Weekday["PublicHoliday"] = "PublicHoliday";
})(Weekday = exports.Weekday || (exports.Weekday = {}));
