interface Result {
    success: boolean;
}

interface DeparturesResult extends Result {
    departures?: FPTFStopover[];
    ticker?: string[];
}

interface JourneysResult extends Result {
    journeys?: FPTFJourney[];
}

interface StopsResult extends Result {
    stops?: FPTFStop[];
}

interface Ticket {
	id: string;
	name: string;
	faresAuthorityRef: string;
	faresAuthorityName: string;
	price: number | null;
	// todo: <NetPrice>
	currency: string | null;
	// todo: <VatRate>
	tariffLevel: string | null;
	// todo: <TariffLevelLabel>
	travelClass: string | null; // todo: make an enum
	// todo: <RequiredCard>
	validFor: string | null; // todo: make an enum
	validityDuration: string | null;
	// todo: <ValidityDurationText>
	// todo: <ValidityFareZones>
	// todo: <ValidityAreaText>
	// todo: <InfoUrl>
	// todo: <SaleUrl>
	// todo: <BookingInfo>
}
