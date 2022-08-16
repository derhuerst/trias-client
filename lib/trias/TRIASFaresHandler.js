"use strict";
// import * as moment from "moment-timezone";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIASFaresHandler = void 0;
class TRIASFaresHandler {
    constructor(url, requestorRef, headers) {
        this.url = url;
        this.requestorRef = requestorRef;
        this.headers = headers;
    }
    async getFares(options) {
        // const maxResults = options.maxResults ? options.maxResults : 5;
        // let arrTime;
        // let depTime;
        // if (options.arrivalTime) arrTime = this.parseRequestTime(options.arrivalTime);
        // else if (options.departureTime) depTime = this.parseRequestTime(options.departureTime);
        // const via = (options.via || [])
        //     .map((stationID) => this.parseRequestViaStation(stationID)).join("");
        // const payload = TRIAS_TR.replace("$ORIGIN", options.origin)
        //     .replace("$VIA", via)
        //     .replace("$DESTINATION", options.destination)
        //     .replace("$DEPTIME", depTime ? depTime : "")
        //     .replace("$ARRTIME", arrTime ? arrTime : "")
        //     .replace("$MAXRESULTS", maxResults.toString())
        //     .replace("$INCLUDE_FARES", options.includeFares ? "true" : "false")
        //     .replace("$TOKEN", this.requestorRef);
        // const doc = await requestAndParse(this.url, this.requestorRef, this.headers, payload);
        // const trips: FPTFJourney[] = [];
        // for (const tripEl of selectAll("TripResult", doc)) {
        //     const trip: FPTFJourney = {
        //         type: "journey",
        //         id: "",
        //         legs: [],
        //     };
        //     const tripID = getText(selectOne("TripId", tripEl));
        //     if (tripID) trip.id = tripID;
        //     for (const legEl of selectAll("TripLeg", tripEl)) {
        //         const leg: FPTFLeg = {
        //             mode: FPTFMode.UNKNOWN,
        //             direction: "",
        //             origin: "",
        //             destination: "",
        //             departure: "",
        //             arrival: "",
        //         };
        //         if (selectOne("TimedLeg", legEl)) {
        //             const origin: FPTFStop = {
        //                 type: "stop",
        //                 id: "",
        //                 name: "",
        //             };
        //             const legBoardEl = selectOne("LegBoard", legEl);
        //             const startStationID = getText(selectOne("StopPointRef", legBoardEl));
        //             if (startStationID) origin.id = this.parseStationID(startStationID);
        //             const startStationName = getText(selectOne("StopPointName Text", legBoardEl));
        //             if (startStationName) origin.name = startStationName;
        //             const startTime = getText(selectOne("TimetabledTime", legBoardEl));
        //             if (startTime) leg.departure = leg.plannedDeparture = this.parseResponseTime(startTime);
        //             const startRealtime = getText(selectOne("EstimatedTime", legBoardEl));
        //             if (startRealtime) {
        //                 leg.departure = this.parseResponseTime(startRealtime);
        //                 leg.departureDelay = moment(leg.departure).unix() - moment(leg.plannedDeparture).unix();
        //             }
        //             const startPlatform = getText(selectOne("PlannedBay Text", legBoardEl));
        //             if (startPlatform) leg.departurePlatform = startPlatform;
        //             const destination: FPTFStop = {
        //                 type: "stop",
        //                 id: "",
        //                 name: "",
        //             };
        //             const legAlightEl = selectOne("LegAlight", legEl);
        //             const endStationID = getText(selectOne("StopPointRef", legAlightEl));
        //             if (endStationID) destination.id = this.parseStationID(endStationID);
        //             const endStationName = getText(selectOne("StopPointName Text", legAlightEl));
        //             if (endStationName) destination.name = endStationName;
        //             const endTime = getText(selectOne("TimetabledTime", legAlightEl));
        //             if (endTime) leg.arrival = leg.plannedArrival = this.parseResponseTime(endTime);
        //             const endRealtime = getText(selectOne("EstimatedTime", legAlightEl));
        //             if (endRealtime) {
        //                 leg.arrival = this.parseResponseTime(endRealtime);
        //                 leg.arrivalDelay = moment(leg.arrival).unix() - moment(leg.plannedArrival).unix();
        //             }
        //             const endPlatform = getText(selectOne("PlannedBay Text", legAlightEl));
        //             if (endPlatform) leg.arrivalPlatform = endPlatform;
        //             leg.line = {
        //                 type: "line",
        //                 id: "",
        //                 line: "",
        //             };
        //             const tripId = getText(selectOne("JourneyRef", legEl));
        //             if (tripId) leg.tripId = tripId;
        //             const lineId = getText(selectOne("LineRef", legEl));
        //             if (lineId && leg.line) leg.line.id = lineId;
        //             const lineName = getText(selectOne("PublishedLineName Text", legEl));
        //             if (lineName && leg.line) leg.line.line = lineName;
        //             const direction = getText(selectOne("DestinationText Text", legEl));
        //             if (direction) leg.direction = direction;
        //             const mode = getText(selectOne("PtMode", legEl));
        //             if (mode === "bus") {
        //                 leg.mode = FPTFMode.BUS;
        //             } else if (mode === "tram") {
        //                 leg.mode = FPTFMode.TRAIN;
        //                 leg.subMode = FPTFSubmode.TRAM;
        //             } else if (mode === "metro") {
        //                 leg.mode = FPTFMode.TRAIN;
        //                 leg.subMode = FPTFSubmode.METRO;
        //             } else if (mode === "rail") {
        //                 leg.mode = FPTFMode.TRAIN;
        //                 leg.subMode = FPTFSubmode.RAIL;
        //             }
        //             leg.origin = origin;
        //             leg.destination = destination;
        //         } else if (selectOne("ContinuousLeg", legEl) || selectOne("InterchangeLeg", legEl)) {
        //             const origin: FPTFLocation = {
        //                 type: "location",
        //                 name: "",
        //             };
        //             const legStartEl = selectOne("LegStart", legEl);
        //             const startLocationName = getText(selectOne("LocationName Text", legStartEl));
        //             if (startLocationName) origin.name = startLocationName;
        //             const startGeoPos = selectOne("GeoPosition", legStartEl);
        //             if (startGeoPos) {
        //                 const latitude = getText(selectOne("Latitude", startGeoPos));
        //                 if (latitude) origin.latitude = parseFloat(latitude);
        //                 const longitude = getText(selectOne("Longitude", startGeoPos));
        //                 if (longitude) origin.longitude = parseFloat(longitude);
        //             }
        //             const destination: FPTFLocation = {
        //                 type: "location",
        //                 name: "",
        //             };
        //             const legEndEl = selectOne("LegEnd", legEl);
        //             const endLocationName = getText(selectOne("LocationName Text", legEl));
        //             if (endLocationName) destination.name = endLocationName;
        //             const endGeoPos = selectOne("GeoPosition", legEndEl);
        //             if (endGeoPos) {
        //                 const latitude = getText(selectOne("Latitude", endGeoPos));
        //                 if (latitude) destination.latitude = parseFloat(latitude);
        //                 const longitude = getText(selectOne("Longitude", endGeoPos));
        //                 if (longitude) destination.longitude = parseFloat(longitude);
        //             }
        //             const startTime = getText(selectOne("TimeWindowStart", legEl));
        //             if (startTime) leg.departure = this.parseResponseTime(startTime);
        //             const endTime = getText(selectOne("TimeWindowEnd", legEl));
        //             if (endTime) leg.arrival = this.parseResponseTime(endTime);
        //             leg.mode = FPTFMode.WALKING;
        //             leg.origin = origin;
        //             leg.destination = destination;
        //         }
        //         trip.legs.push(leg);
        //     }
        //     if (options.includeFares) {
        //         if (!trip.tickets) trip.tickets = [];
        //         // todo: there might be multiple
        //         const faresEl = selectOne("TripFares", tripEl);
        //         for (const ticketEl of selectAll("Ticket", faresEl)) {
        //             const ticket = this.parseResponseTicket(ticketEl);
        //             if (ticket) trip.tickets.push(ticket);
        //         }
        //     }
        //     trips.push(trip);
        // }
        // return {
        //     success: true,
        //     journeys: trips,
        // };
    }
}
exports.TRIASFaresHandler = TRIASFaresHandler;
