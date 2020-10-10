import { Component, NgZone } from "@angular/core";
import { ICustomWindow, WindowRefService } from "./window-ref.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private _window: ICustomWindow;
  public rzp: any;

  public options: any = {
    key: "", // razorpay key
    name: "Parth devloper",
    description: "Shopping",
    amount: 89950000, // razorpay amount paisa
    prefill: {
      name: "Parth devloper",
      email: "parthdevloper@gmail.com",
    },
    notes: {},
    theme: {
      color: "#bc3f7d",
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: () => {
        this.zone.run(() => {
          // add current page routing if payment fails
        });
      },
    },
  };

  constructor(private zone: NgZone, private winRef: WindowRefService) {
    this._window = this.winRef.nativeWindow;
  }

  checkout(): void {
    this.rzp = new this.winRef.nativeWindow["Razorpay"](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {});
  }
}
