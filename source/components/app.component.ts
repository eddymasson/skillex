export default class AppComponent {
    constructor() { }
    $onInit(){
        
    }
    static Factory() {
        return {
            controller: AppComponent,
            templateUrl: 'views/components/app.html'
        };
    }
    
}
