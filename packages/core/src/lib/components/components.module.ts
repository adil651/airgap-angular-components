import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { TranslateModule } from '@ngx-translate/core'
import { MomentModule } from 'ngx-moment'
import { QRCodeModule } from 'angularx-qrcode'
import { FormsModule } from '@angular/forms'
import { PipesModule } from '../pipes/pipes.module'
import { CurrencySymbolComponent } from './currency-symbol/currency-symbol.component'
import { FromToComponent } from './from-to/from-to.component'
import { IdenticonComponent } from './identicon/identicon.component'
import { NetworkBadgeComponent } from './network-badge/network-badge.component'
import { TitledAddressComponent } from './titled-address/titled-address.component'
import { TitledTextComponent } from './titled-text/titled-text.component'
import { AccountItemComponent } from './account-item/account-item.component'
import { AccountSelectionComponent } from './account-selection/account-selection.component'
import { QrComponent } from './qr/qr.component'
import { QrSettingsComponent } from './qr-settings/qr-settings.component'
import { IACQrComponent } from './iac-qr/iac-qr.component'

@NgModule({
  declarations: [
    FromToComponent,
    IdenticonComponent,
    TitledTextComponent,
    TitledAddressComponent,
    CurrencySymbolComponent,
    NetworkBadgeComponent,
    QrComponent,
    IACQrComponent,
    AccountItemComponent,
    AccountSelectionComponent,
    QrSettingsComponent,
  ],
  imports: [CommonModule, IonicModule, TranslateModule, MomentModule, PipesModule, QRCodeModule, FormsModule],
  exports: [
    FromToComponent,
    IdenticonComponent,
    TitledTextComponent,
    TitledAddressComponent,
    CurrencySymbolComponent,
    NetworkBadgeComponent,
    AccountItemComponent,
    AccountSelectionComponent,
    QrComponent,
    IACQrComponent,
    QrSettingsComponent,
  ]
})
export class ComponentsModule {}
