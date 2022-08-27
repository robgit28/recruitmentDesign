import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContentManagementSystemComponent } from './components/features/content-management-system/content-management-system.component';
import { DesignComponent } from './components/design/design.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { GdprComplianceComponent } from './components/features/gdpr-compliance/gdpr-compliance.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IntegrationsComponent } from './components/features/integrations/integrations.component';
import { JobSearchComponent } from './components/features/job-search/job-search.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SearchEngineOptimisationComponent } from './components/features/search-engine-optimisation/search-engine-optimisation.component';
import { SecurityTechnologyComponent } from './components/features/security-technology/security-technology.component';
import { SocialMediaComponent } from './components/features/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactUsComponent,
    ContentManagementSystemComponent,
    DesignComponent,
    FeaturesComponent,
    FooterComponent,
    GdprComplianceComponent,
    HeaderComponent,
    HomeComponent,
    IntegrationsComponent,
    JobSearchComponent,
    PricingComponent,
    TeamComponent,
    TestimonialsComponent,
    SearchEngineOptimisationComponent,
    SecurityTechnologyComponent,
    SocialMediaComponent,
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
