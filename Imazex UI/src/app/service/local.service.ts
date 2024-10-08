import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Injectable({
    providedIn: 'root'
})
export class LocalService {
    constructor(public local: LocalStorageService, private storageService: StorageService) { }
    // Set the json data to local storage
    setJsonValue(key: string, value: any) {
        this.local.set(key, value);
        // this.storageService.secureStorage.setItem(key, value);
    }
    // Get the json value from local storage
    getJsonValue(key: string) {
        return this.local.get(key);
        // return this.storageService.secureStorage.getItem(key);
    }
    removeJsonValue(key: string) {
        // return this.storageService.secureStorage.removeItem(key);
        this.local.remove(key);
    }
    // Clear the local storage
    clear() {
        this.local.clear();
        // return this.storageService.secureStorage.clear();
    }
}