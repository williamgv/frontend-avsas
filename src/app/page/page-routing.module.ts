import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';

const routes: Routes = [
  {
    path:'',
    component: PageComponent,
    children: [
      {
        path:'aboutUs',
        loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsModule),
      },
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
      },
      {
        path:'blog',
        loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule),
      },
      {
        path:'blog',
        loadChildren: () => import('./notice/notice.module').then( m => m.NoticeModule),
      },
      {
        path:'contactUs',
        loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsModule),
      },
      {
        path:'howServiceWorks',
        loadChildren: () => import('./how-service-works/how-service-works.module').then( m => m.HowServiceWorksModule),
      },
      {
        path:'services',
        loadChildren: () => import('./services/services.module').then( m => m.ServicesModule),
      },
      {
        path:'**',
        pathMatch:'full',
        redirectTo:'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
