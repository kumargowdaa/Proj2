import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Subject, Observable } from 'rxjs';

@Injectable()

export class RouteDataProvider {
    private previousUrl: string = undefined;
    area: BehaviorSubject<string> = new BehaviorSubject("");
    subArea: BehaviorSubject<string> = new BehaviorSubject("");
    queryParam: BehaviorSubject<any> = new BehaviorSubject({});
    subAreaInside: BehaviorSubject<string> = new BehaviorSubject("");
    private _listners = new Subject<any>();
    private _subAreaListners = new Subject<any>();
    public share = this.subArea.asObservable();
    constructor(private router: Router, private activateRoute: ActivatedRoute) {
        this.router.events.subscribe(
            data => {
                if (data instanceof NavigationEnd) {
                    let urlParts: string[] = data.urlAfterRedirects.split("?");
                    let url: string = urlParts[0] || "";
                    let query: string = urlParts[1] || "";
                    if (url.length > 0) {
                        let parts: string[] = url.split("/");
                        parts.splice(0, 1);
                        let oldArea = this.area.getValue();
                        let newArea = parts[0] || "";
                        if (newArea !== oldArea) {
                            this.area.next(newArea);
                        }

                        let oldSubArea = this.subArea.getValue();
                        let newSubArea = parts[1] || "";
                        if (newSubArea !== oldSubArea) {
                            this.subArea.next(newSubArea);
                        }

                        let oldSubAreaInside = this.subAreaInside.getValue();
                        let newInsideSubArea = parts[2] || "";
                        if (newInsideSubArea !== oldSubAreaInside) {
                            this.subAreaInside.next(newInsideSubArea);
                        }

                        if (parts[2] && parts[2].length > 0) {
                            //Handle landing page request, convert to query params
                            query = "id=" + parts[2];
                        }
                    }

                    if (query.length > 0) {
                        this.queryParam.next(this.queryStringToJSON(query));
                    } else {
                        this.queryParam.next({});
                    }
                    this._subAreaListners.next(this.queryParam.getValue());
                    console.log("Area: " + this.area.getValue() + " Sub-Area: " + this.subArea.getValue() + " Sub-Inside-Area: " + this.subAreaInside.getValue() + " Query:" + JSON.stringify(this.queryParam.getValue()));
                }

            }
        )
    }

    private queryStringToJSON(queryString) {
        var pairs = queryString.split('&');
        var result = {};
        pairs.forEach(function (pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
        return result;
    }

    sendTo(requiredData: any) {
        this._listners.next(requiredData);
    }

    listen(): Observable<any> {
        return this._listners.asObservable();
    }

    subAreaListen(): Observable<any> {
        return this._subAreaListners.asObservable();
    }

}