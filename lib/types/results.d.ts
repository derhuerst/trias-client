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
    currency: string | null;
    tariffLevel: string | null;
    travelClass: string | null;
    validFor: string | null;
    validityDuration: string | null;
}
