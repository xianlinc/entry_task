"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHello() {
        return 'Hello World!';
    }
    async findToken(tokenAddress) {
        const mock = {
            name: tokenAddress,
            symbol: 'TEST',
            totalSupply: 'TEST',
        };
        const query = { token_info: {} };
        const queryEncoded = btoa(JSON.stringify(query));
        const reqUrl = `https://phoenix-lcd.terra.dev/cosmwasm/wasm/v1/contract/${tokenAddress}/smart/${queryEncoded}`;
        const data = this.httpService.get(reqUrl).pipe((0, rxjs_1.map)((res) => {
            console.log(res.data.data);
            const transformed = {
                name: res.data.data.name,
                symbol: res.data.data.symbol,
                totalSupply: res.data.data.total_supply,
            };
            console.log(transformed);
            return transformed;
        }));
        console.log(data);
        return await (0, rxjs_1.lastValueFrom)(data);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map