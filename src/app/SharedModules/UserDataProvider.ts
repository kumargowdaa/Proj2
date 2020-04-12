import { Injectable } from '@angular/core';
import { AreaDataProvider } from '../Providers/AreaDataProvider';
import { RouteDataProvider } from './RouteDataProvider.provider';
import { EventType, EventData } from '../models/sharedModel';
import { TeamLeaderProvider } from '../team-leader/Providers/TeamLeaderProvider';

@Injectable()

export class UserDataProvider extends AreaDataProvider {

    constructor(public routerDataProvider: RouteDataProvider, 
        public teamLeaderProvider: TeamLeaderProvider
    ) {
        super('Entries', routerDataProvider)
    }

    areaChanged(newArea: string, firstCall: boolean) {
        if (firstCall) {
            return;
        }
    }

    subAreaChanged(newSubArea: string, firstCall: boolean) {
        if (firstCall || newSubArea == this.currentAreaName) {
            return;
        }
        this.eventHandler({ type: EventType.subAreaChanged });
    }

    subAreaInsideChanged(newSubArea: string, firstCall: boolean) {
        if (firstCall || newSubArea == this.currentAreaName) {
            return;
        }
        this.eventHandler({ type: EventType.subAreaInsideChanged });
    }

    queryParamChanged(newQueryParams: any, firstCall: boolean) {
        if (firstCall) {
            return;
        }
        if (newQueryParams.id !== undefined) {
            this.eventHandler({ type: EventType.queryParamChanged });
        } else {
            this.eventHandler({ type: EventType.areaChanged });
        }
    }

    urlMaker(data: any): string {
        return "";
    }

    eventHandler(eventData: EventData) {
        switch (eventData.type) {
            case EventType.queryParamChanged:
                console.log('Query Param Changed', this.currentQueryParam);
                break;
            case EventType.areaChanged:
                console.log('Query Param Changed', this.currentAreaName);
                switch(this.currentAreaName){
                    case "team-leader":
                        console.log('I am inside Team Leader');
                        this.teamLeaderProvider.getAllProgamData();
                        break;
                }
            case EventType.subAreaChanged:
                console.log('Sub Area Changed', this.currentSubAreaName);
                switch (this.currentSubAreaName) {
                    case "team-leader":
                        console.log('I am inside Team Leader');
                        this.teamLeaderProvider.getAllProgamData();
                        break;
                }
        }
    }

}
