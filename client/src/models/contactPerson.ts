import { Supplier } from './supplier'

export interface ContactPerson {
    id: number
    name: string
    position: string
    phoneNumber: string
    email: string
    supplier: Supplier

}