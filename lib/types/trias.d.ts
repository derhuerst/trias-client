export declare enum SIRIStatusCodes {
    OK = 0,
    RequestTimeout = 1,
    InvalidRequest = 2,
    Unauthorized = 3,
    Forbidden = 4,
    NotFound = 5,
    VersionNotSupported = 6,
    CapabilityNotSupported = 7,
    ServiceNotAvailable = 8,
    AccessNotAllowed = 9,
    NoInfoForTopic = 10,
    UnknownSubscriber = 11,
    UnknownSubscription = 12,
    AllowedResourceUsageExceeded = 13,
    OtherError = 14
}
export declare enum ErrorCodes {
    AuthFailure = "AUTH_FAILURE",
    AuthMissing = "AUTH_MISSING",
    AuthUserUnknown = "AUTH_USER_UNKNOWN",
    Error = "TRIASGENERIC_ERROR",
    ServiceNotSupported = "TRIASGENERIC_SERVICENOTSUPPORTED",
    RequestNotSupported = "TRIASGENERIC_REQUESTNOTSUPPORTED",
    FeatureNotSupported = "TRIASGENERIC_FEATURENOTSUPPORTED",
    LanguageNotSupported = "TRIASGENERIC_LANGUAGENOTSUPPORTED",
    ExceptionFromRequestedLanguage = "TRIASGENERIC_EXCEPTIONFROMREQUESTEDLANGUAGE",
    DataVersionNotAvailable = "TRIASGENERIC_DATAVERSIONNOTAVAILABLE"
}
export declare enum InterchangeModes {
    Walk = "walk",
    ParkAndRide = "parkAndRide",
    BikeAndRide = "bikeAndRide",
    CarHire = "carHire",
    BikeHire = "bikeHire",
    ProtectedConnection = "protectedConnection",
    GuaranteedConnection = "guaranteedConnection",
    RemainInVehicle = "remainInVehicle",
    ChangeWithinVehicle = "changeWithinVehicle",
    CheckIn = "checkIn",
    CheckOut = "checkOut"
}
export declare enum PtModes {
    All = "all",
    Unknown = "unknown",
    Air = "air",
    Bus = "bus",
    TrolleyBus = "trolleyBus",
    Tram = "tram",
    Coach = "coach",
    Rail = "rail",
    IntercityRail = "intercityRail",
    UrbanRail = "urbanRail",
    Metro = "metro",
    Water = "water",
    Cableway = "cableway",
    Funicular = "funicular",
    Taxi = "taxi"
}
export declare enum RailSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    Local = "local",
    HighSpeedRail = "highSpeedRail",
    SuburbanRailway = "suburbanRailway",
    RegionalRail = "regionalRail",
    InterregionalRail = "interregionalRail",
    LongDistance = "longDistance",
    International = "international",
    SleeperRailService = "sleeperRailService",
    NightRail = "nightRail",
    CarTransportRailService = "carTransportRailService",
    TouristRailway = "touristRailway",
    RailShuttle = "railShuttle",
    ReplacementRailService = "replacementRailService",
    SpecialTrain = "specialTrain",
    CrossCountryRail = "crossCountryRail",
    RackAndPinionRailway = "rackAndPinionRailway"
}
export declare enum CoachSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    InternationalCoach = "internationalCoach",
    NationalCoach = "nationalCoach",
    ShuttleCoach = "shuttleCoach",
    RegionalCoach = "regionalCoach",
    SpecialCoach = "specialCoach",
    SightseeingCoach = "sightseeingCoach",
    TouristCoach = "touristCoach",
    CommuterCoach = "commuterCoach"
}
export declare enum MetroSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    Metro = "metro",
    Tube = "tube",
    UrbanRailway = "urbanRailway"
}
export declare enum BusSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    LocalBus = "localBus",
    RegionalBus = "regionalBus",
    ExpressBus = "expressBus",
    NightBus = "nightBus",
    PostBus = "postBus",
    SpecialNeedsBus = "specialNeedsBus",
    MobilityBus = "mobilityBus",
    MobilityBusForRegisteredDisabled = "mobilityBusForRegisteredDisabled",
    SightseeingBus = "sightseeingBus",
    ShuttleBus = "shuttleBus",
    SchoolBus = "schoolBus",
    SchoolAndPublicServiceBus = "schoolAndPublicServiceBus",
    RailReplacementBus = "railReplacementBus",
    DemandAndResponseBus = "demandAndResponseBus",
    AirportLinkBus = "airportLinkBus"
}
export declare enum TramSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    CityTram = "cityTram",
    LocalTram = "localTram",
    RegionalTram = "regionalTram",
    SightseeingTram = "sightseeingTram",
    ShuttleTram = "shuttleTram"
}
export declare enum WaterSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    InternationalCarFerry = "internationalCarFerry",
    NationalCarFerry = "nationalCarFerry",
    RegionalCarFerry = "regionalCarFerry",
    LocalCarFerry = "localCarFerry",
    InternationalPassengerFerry = "internationalPassengerFerry",
    NationalPassengerFerry = "nationalPassengerFerry",
    RegionalPassengerFerry = "regionalPassengerFerry",
    LocalPassengerFerry = "localPassengerFerry",
    PostBoat = "postBoat",
    TrainFerry = "trainFerry",
    RoadFerryLink = "roadFerryLink",
    AirportBoatLink = "airportBoatLink",
    HighSpeedVehicleService = "highSpeedVehicleService",
    HighSpeedPassengerService = "highSpeedPassengerService",
    SightseeingService = "sightseeingService",
    SchoolBoat = "schoolBoat",
    CableFerry = "cableFerry",
    RiverBus = "riverBus",
    ScheduledTodo = "scheduled-"
}
export declare enum AirSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    InternationalFlight = "internationalFlight",
    DomesticFlight = "domesticFlight",
    IntercontinentalFlight = "intercontinentalFlight",
    DomesticScheduledFlight = "domesticScheduledFlight",
    ShuttleFlight = "shuttleFlight",
    IntercontinentalCharterFlight = "intercontinentalCharterFlight",
    InternationalCharterFlight = "internationalCharterFlight",
    RoundTripCharterFlight = "roundTripCharterFlight",
    SightseeingFlight = "sightseeingFlight",
    HelicopterService = "helicopterService",
    DomesticCharterFlight = "domesticCharterFlight",
    SchengenAreaFlight = "SchengenAreaFlight",
    AirshipService = "airshipService",
    ShortHaulInternationalFlight = "shortHaulInternationalFlight",
    CanalBarge = "canalBarge"
}
export declare enum TelecabinSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    Telecabin = "telecabin",
    CableCar = "cableCar",
    Lift = "lift",
    ChairLift = "chairLift",
    DragLift = "dragLift",
    TelecabinLink = "telecabinLink"
}
export declare enum FunicularSubmode {
    Unknown = "unknown",
    Funicular = "funicular",
    AllFunicularServices = "allFunicularServices",
    UndefinedFunicular = "undefinedFunicular"
}
export declare enum TaxiSubmode {
    Unknown = "unknown",
    Undefined = "undefined",
    CommunalTaxi = "communalTaxi",
    WaterTaxi = "waterTaxi",
    RailTaxi = "railTaxi",
    BikeTaxi = "bikeTaxi",
    BlackCab = "blackCab",
    MiniCab = "miniCab",
    AllTaxiServices = "allTaxiServices"
}
export declare enum Weekday {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    PublicHoliday = "PublicHoliday"
}
