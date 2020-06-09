#projections

##Bandeau
use element with class="title" to project title in <ng-content select=".title"></ng-content>
use @Input() title true in parent component to appear bandeau
for background colors : $color1 default, use @Input() bgColorTwo for background $color2, use @Input() bgColorThree for background $color3.

##contenus

###col left
use element with class="left" to project elements in <ng-content select=".left"></ng-content>

###col right
use element with class="right" to project elements in <ng-content select=".right"></ng-content>
