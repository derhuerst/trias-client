"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIASDeparturesHandler = void 0;
const moment = require("moment-timezone");
const RequestAndParse_1 = require("../RequestAndParse");
const TRIAS_SER_1 = require("../xml/TRIAS_SER");
class TRIASDeparturesHandler {
    constructor(url, requestorRef, headers) {
        this.url = url;
        this.requestorRef = requestorRef;
        this.headers = headers;
    }
    async getDepartures(options) {
        const maxResults = options.maxResults ? options.maxResults : 20;
        let time;
        if (options.time)
            time = moment(options.time).tz("Europe/Berlin").format("YYYY-MM-DDTHH:mm:ss");
        else
            time = moment().tz("Europe/Berlin").format("YYYY-MM-DDTHH:mm:ss");
        const payload = TRIAS_SER_1.TRIAS_SER.replace("$STATIONID", options.id).replace("$TIME", time).replace("$MAXRESULTS", maxResults.toString()).replace("$TOKEN", this.requestorRef);
        const doc = await RequestAndParse_1.requestAndParse(this.url, this.requestorRef, this.headers, payload);
        const ticker = [];
        const departures = [];
        for (const situationEl of RequestAndParse_1.selectAll("PtSituation", doc)) {
            const summary = RequestAndParse_1.getText(RequestAndParse_1.selectOne("Summary", situationEl));
            if (!summary)
                continue;
            const startTime = RequestAndParse_1.getText(RequestAndParse_1.selectOne("StartTime", situationEl));
            const endTime = RequestAndParse_1.getText(RequestAndParse_1.selectOne("EndTime", situationEl));
            const now = moment().unix();
            if (now > moment(startTime).unix() && now < moment(endTime).unix())
                ticker.push(summary);
        }
        for (const departureEl of RequestAndParse_1.selectAll("StopEvent", doc)) {
            const departure = {
                type: "stopover",
                stop: options.id,
                line: {
                    type: "line",
                    id: "",
                    line: "",
                },
                mode: "unknown" /* UNKNOWN */,
                direction: "",
                departure: "",
            };
            const lineName = RequestAndParse_1.getText(RequestAndParse_1.selectOne("PublishedLineName Text", departureEl)) || RequestAndParse_1.getText(RequestAndParse_1.selectOne("Name Text", departureEl));
            if (lineName && departure.line) {
                departure.line.id = lineName;
                departure.line.line = lineName;
            }
            const direction = RequestAndParse_1.getText(RequestAndParse_1.selectOne("DestinationText Text", departureEl));
            if (direction)
                departure.direction = direction;
            const timetabledTime = RequestAndParse_1.getText(RequestAndParse_1.selectOne("TimetabledTime", departureEl));
            if (timetabledTime)
                departure.departure = this.parseResponseTime(timetabledTime);
            const estimatedTime = RequestAndParse_1.getText(RequestAndParse_1.selectOne("EstimatedTime", departureEl));
            if (estimatedTime)
                departure.departureDelay = moment(estimatedTime).unix() - moment(timetabledTime).unix();
            const plannedBay = RequestAndParse_1.getText(RequestAndParse_1.selectOne("PlannedBay Text", departureEl));
            if (plannedBay)
                departure.departurePlatform = plannedBay;
            const type = RequestAndParse_1.getText(RequestAndParse_1.selectOne("PtMode", departureEl));
            if (type === "bus") {
                departure.mode = "bus" /* BUS */;
            }
            else if (type === "tram") {
                departure.mode = "train" /* TRAIN */;
                departure.subMode = "tram" /* TRAM */;
            }
            else if (type === "metro") {
                departure.mode = "train" /* TRAIN */;
                departure.subMode = "metro" /* METRO */;
            }
            else if (type === "rail") {
                departure.mode = "train" /* TRAIN */;
                departure.subMode = "rail" /* RAIL */;
            }
            departures.push(departure);
        }
        return {
            success: true,
            departures,
            ticker,
        };
    }
    parseResponseTime(time) {
        return moment(time).tz("Europe/Berlin").format();
    }
}
exports.TRIASDeparturesHandler = TRIASDeparturesHandler;
