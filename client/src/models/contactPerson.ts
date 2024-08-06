import { Supplier } from './supplier'

export interface ContactPerson {
    id: number
    name: string
    position: string
    phoneNumber: string
    email: string
    supplier: Supplier

}
export interface ContactPersonDto {
    id: number
    name: string
    position: string
    phoneNumber: string
    email: string
    supplierId: number

}
// Define the initial empty supplier object
export const emptyContactPeron: ContactPersonDto = {
    id: 0,
    name: '',
    position: '',
    email: '',
    phoneNumber: '',
    supplierId: 0


}