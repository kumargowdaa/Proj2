import { RouteDataProvider } from '../SharedModules/RouteDataProvider.provider';

export abstract class AreaDataProvider {
    protected thisAreaName: string = "";
    protected currentAreaName: string = "";
    protected currentSubAreaName: string = "";
    protected currentSubInsideAreaName : string = "";
    public currentQueryParam: any = {};
    protected firstCall: boolean = true;
    protected routeDataProvider: RouteDataProvider;

    constructor(areaName: string, routeDataProvider: RouteDataProvider) {
        this.routeDataProvider = routeDataProvider;
        this.thisAreaName = areaName;

        this.routeDataProvider.area.subscribe(
            data => {
                this.currentAreaName = data;
                this.areaChanged(data, this.firstCall);
            }
        );

        this.routeDataProvider.subArea.subscribe(
            data => {
                this.currentSubAreaName = data;
                this.subAreaChanged(data, this.firstCall);
            }
        );

        this.routeDataProvider.subAreaInside.subscribe(
            data => {
                this.currentSubInsideAreaName = data;
                this.subAreaInsideChanged(data, this.firstCall);
            }
        );

        this.routeDataProvider.queryParam.subscribe(
            data => {
                this.currentQueryParam = data;
                this.queryParamChanged(data, this.firstCall);
            }
        );

        this.firstCall = false;
    }

    abstract areaChanged(newArea: string, firstCall: boolean);

    abstract subAreaChanged(newSubArea: string, firstCall: boolean);

    abstract subAreaInsideChanged(newSubArea: string, firstCall: boolean);

    abstract queryParamChanged(newQueryParams: any, firstCall: boolean);

    abstract urlMaker(data: any): string;
}