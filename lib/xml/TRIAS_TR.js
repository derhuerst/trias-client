"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIAS_TR = void 0;
exports.TRIAS_TR = `
<?xml version="1.0" encoding="UTF-8" ?>
<Trias version="1.2" xmlns="http://www.vdv.de/trias" xmlns:siri="http://www.siri.org.uk/siri" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://raw.githubusercontent.com/VDVde/TRIAS/v1.2/Trias.xsd">
    <ServiceRequest>
        <siri:RequestorRef>$TOKEN</siri:RequestorRef>
        <RequestPayload>
            <TripRequest>
                <Origin>
                    <LocationRef>
                        <StopPointRef>$ORIGIN</StopPointRef>
                    </LocationRef>
                    $DEPTIME
                </Origin>
                $VIA
                <Destination>
                    <LocationRef>
                        <StopPointRef>$DESTINATION</StopPointRef>
                    </LocationRef>
                    $ARRTIME
                </Destination>
                <Params>
                    <IncludeTurnDescription>false</IncludeTurnDescription>
                    <IncludeTrackSections>false</IncludeTrackSections>
                    <IncludeLegProjection>false</IncludeLegProjection>
                    <IncludeIntermediateStops>false</IncludeIntermediateStops>
                    <IncludeFares>$INCLUDE_FARES</IncludeFares>
                    <NumberOfResults>$MAXRESULTS</NumberOfResults>
                </Params>
            </TripRequest>
        </RequestPayload>
    </ServiceRequest>
</Trias>
`;
