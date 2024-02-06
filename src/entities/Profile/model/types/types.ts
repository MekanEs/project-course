import type { Currency, Country } from 'shared/const/common';

export interface Profile {
    first: string;
    lastname: string;
    age: 22;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}
