import { ContactPerson } from './contactPerson'
import { Product } from './products'
export interface Supplier {
    id: number
    name: string
    description: string
    country: string
    city: string
    businessType: string
    yearEstablished: number
    phoneNumber: string
    currency: string
    profileImage: string
    email: string
    website: string
    faxNumber: string
    timeZone: string
    bankName: string
    shippingMethods: string[]
    bankAccountNumber: string
    cr: number
    db: number
    balance: number
    contactPersons: ContactPerson[]
    products: Product[]
}

// Define the initial empty supplier object
export const emptySupplier: Supplier = {
    id: 0,
    name: '',
    description: '',
    country: '',
    city: '',
    businessType: '',
    yearEstablished: 0,
    phoneNumber: '',
    currency: '',
    profileImage: '',
    cr: 0,
    db: 0,
    balance: 0,
    email: '',
    website: '',
    faxNumber: '',
    timeZone: '',
    bankName: '',
    bankAccountNumber: '',
    shippingMethods: [],
    contactPersons: [],
    products: []
};