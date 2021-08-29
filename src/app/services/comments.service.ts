import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { CommentDto } from '../models/app.dtos';

@Injectable({
    providedIn: 'root'
})
class CommentsService {
    uri = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    createComment(comment: CommentDto) {
        return this.http.post(`${this.uri}/createComment`, comment)
        .subscribe(res => console.log('Done'));
    }

    deleteComments() {
        return this.http.delete(`${this.uri}/deleteComments`)
        .subscribe(res => console.log('Done'));
    }

    getComment(id: number) {
        return this.http.get(`${this.uri}/getComment/${id}`)
        .subscribe(res => console.log('Donde'))
    }

    getComments() {
        return this.http.get(`${this.uri}/getAll`)
        .subscribe(res => console.log('Donde'))
    }
}