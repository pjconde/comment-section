import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostContainerComponent } from './containers/post-container/post-container.component';
import { CommentComponent } from './components/comment/comment.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';

enum AppRoutes {
  post = "post/:id"
}

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'home' 
  },
  { 
    path: 'home',
    component: HomeContainerComponent 
  },
  { 
    path: AppRoutes.post,
    component: PostContainerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
