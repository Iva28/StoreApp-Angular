export class Product {
    constructor(public id: number = 0,
        public title: string = '',
        public price: number = 0,
        public category: string = '',
        public available: boolean = false,
        public quantity: number = 0,
        public date: Date = new Date()) {}
}
