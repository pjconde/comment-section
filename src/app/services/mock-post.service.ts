import { Injectable } from '@angular/core'
import { of } from 'rxjs/index'
import { POST_MOCKS } from '../models/post-mocks'

@Injectable({
    providedIn: 'root'
})
export class MockPostService {
    getUserPosts(username: string) {
        return of(POST_MOCKS)
    }
}