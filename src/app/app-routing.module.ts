import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContentManagementSystemComponent } from './components/features/content-management-system/content-management-system.component';
import { DesignComponent } from './components/design/design.component';
import { FeaturesComponent } from './components/features/features.component';
import { GdprComplianceComponent } from './components/features/gdpr-compliance/gdpr-compliance.component';
import { HomeComponent } from './components/home/home.component';
import { IntegrationsComponent } from './components/features/integrations/integrations.component';
import { JobSearchComponent } from './components/features/job-search/job-search.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SearchEngineOptimisationComponent } from './components/features/search-engine-optimisation/search-engine-optimisation.component';
import { SecurityTechnologyComponent } from './components/features/security-technology/security-technology.component';
import { SocialMediaComponent } from './components/features/social-media/social-media.component';

const routes: Routes = [
  { 
    path: "about",
    component: AboutComponent
  },
  { 
    path: "blog",
    component: BlogComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "features/contact-management-system",
    component: ContentManagementSystemComponent
  },
  {
    path: "design",
    component: DesignComponent
  },
  {
    path: "features",
    component: FeaturesComponent
  },
  {
    path: "features/gdpr-compliance",
    component: GdprComplianceComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "features/integrations",
    component: IntegrationsComponent
  },
  {
    path: "features/job-search",
    component: JobSearchComponent
  },
  {
    path: "pricing",
    component: PricingComponent
  },
  {
    path: "team",
    component: TeamComponent
  },
  {
    path: "testimonials",
    component: TestimonialsComponent
  },
  {
    path: "features/search-engine-optimisation",
    component: SearchEngineOptimisationComponent
  },
  {
    path: "features/security-technology",
    component: SecurityTechnologyComponent

  },
  {
    path: "features/social-media",
    component: SocialMediaComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
