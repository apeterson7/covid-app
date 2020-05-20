export class Covid19RootObject {
    covid19: Covid19;
}

export class Covid19 {
    recordType: string;
    recordLocation: string;
    latitude: number;
    longitude: number;
    totalPopulation: number;
    confirmed: number[];
    deaths: number[];
    recovered: number[];
    dateReport: Date[];
    dateReportUtc: number[];
    lastModifiedTimeUtc: number;
    publishTimeUtc: number;
    confirmedPercentageWOW: number;
    deathPercentageWOW: number;
    recoveredPercentageWOW: number;
    confirmedPercentageDOD: number;
    deathPercentageDOD: number;
    recoveredPercentageDOD: number;
    source: string[];
    sourceURL: string[];
}
