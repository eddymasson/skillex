export default class HomeComponent {
    message: string;
    constructor() {
        this.message = 'Ceci est un message du controller :)';
    }

    $onInit(){}

    static Factory() {
        return {
            controller: HomeComponent,
            templateUrl: 'views/components/home.html'
        };
    }
}