import { Supplier } from './supplier'

export interface ContactPerson {
    id: number
    name: string
    position: string
    phoneNumber: string
    email: string
    supplier: Supplier

}
// Define the initial empty supplier object
export const emptyContactPeron: ContactPerson = {
    id: 0,
    name: '',
    position: '',
    email: '',
    phoneNumber: '',
    supplier:

}