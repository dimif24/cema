import { ContactPerson } from './contactPerson'
import { Product } from './products'
export interface Supplier {
    id: number
    name: string
    description: string | null
    country: string
    city: string
    businessType: string | undefined
    yearEstablished: number | null
    phoneNumber: string
    currency: string | null
    profileImage: string | null
    email: string | null
    website: string | null
    faxNumber: string | null
    timeZone: string | null
    bankName: string | null
    shippingMethods: string[]
    bankAccountNumber: string | null
    cr: number | null
    db: number | null
    balance: number | null
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
    businessType: undefined,
    yearEstablished: null,
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