import { trigger, style, animate, transition } from '@angular/animations';


export class Animations {
    animations = [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(300, style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate(300, style({ opacity: 0 }))
            ])
        ])
    ]
}
